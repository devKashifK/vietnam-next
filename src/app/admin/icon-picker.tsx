"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { cache, Suspense, use, useEffect, useRef, useState } from "react";

// Fetching the list of icon collections
const getIconCollectionsList = cache(async () => {
  const collectionsListUrl = "https://api.iconify.design/collections";
  const data = await (await fetch(collectionsListUrl)).json();
  const collectionListName = Object.keys(data).map((item) => ({
    name: data[item].name,
    prefix: item,
  }));
  return collectionListName;
});

// Fetching icons for a specific collection
const getIcons = cache(async (prefix) => {
  const url = `https://api.iconify.design/collection?prefix=${prefix}&pretty=1`;
  const data = await (await fetch(url)).json();

  const iconNamesToShow = new Set();

  if (data.uncategorized && Array.isArray(data.uncategorized)) {
    data.uncategorized.forEach((iconName) => {
      iconNamesToShow.add(`${prefix}:${iconName}`);
    });
  }
  if (data.categories && typeof data.categories === "object") {
    Object.values(data.categories).forEach((categoryIcons) => {
      if (Array.isArray(categoryIcons)) {
        categoryIcons.forEach((iconName) => {
          iconNamesToShow.add(`${prefix}:${iconName}`);
        });
      }
    });
  }
  return [...iconNamesToShow];
});

// Fetching icons based on search term
const getSearchedIcon = cache(async (searchTerm) => {
  const url = `https://api.iconify.design/search?query=${searchTerm}&pretty=1`;
  const data = await (await fetch(url)).json();
  return data.icons;
});

// Debounce hook for delaying search input processing
const useDebounce = (value, milliSeconds) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};

// Search input component
export function Search({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <div className="relative flex w-full flex-row bg-gray-500 rounded-sm">
      <span className="icon-[material-symbols--search] absolute left-2 top-2 cursor-pointer"></span>
      <Input
        placeholder="Search"
        className="h-7 text-white placeholder:text-white border-none pl-6 shadow-none focus-visible:border-none"
        value={value}
        onChange={(event) => onValueChange(event.currentTarget.value)}
      />
    </div>
  );
}

// Main Icon Picker Panel
export function IconPickerPanel({ onChangeIcon }) {
  const [prefix, setPrefix] = useState("ic");
  const [searchTerm, setSearchTerm] = useState("");

  const searchQuery = useDebounce(searchTerm, 1000);

  const handleChange = (value) => {
    setPrefix(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <Search value={searchTerm} onValueChange={setSearchTerm} />
      <Suspense fallback={<IconProviderSelectSkeleton />}>
        <IconProvidersSelect handleChange={handleChange} />
      </Suspense>
      <Suspense fallback={<IconPickerSkeleton />}>
        <IconPicker
          prefix={prefix}
          onChangeIcon={onChangeIcon}
          searchQuery={searchQuery}
        />
      </Suspense>
    </div>
  );
}

// Select icon provider (collections)
export function IconProvidersSelect({ handleChange }) {
  // const { data: iconsListCollection, isLoading } = useQuery({
  //   queryKey: ["collections"],
  //   queryFn: getIconCollectionsList,
  // });

  const iconsListCollection = use(getIconCollectionsList());

  return (
    <div>
      <Select onValueChange={(val) => handleChange(val)}>
        <SelectTrigger className="w-[100%] h-7 bg-card bg-background  md:text-base text-base rounded-sm focus:no-underline focus:ring-offset-0">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent className="z-[30002] overflow-y-auto h-36">
          {iconsListCollection.map((item) => (
            <SelectItem key={item.name} value={item.prefix}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// Icon Picker Component
export function IconPicker({ prefix, onChangeIcon, searchQuery }) {
  // Fetch search icons only when there is a search query

  // Fetch icons based on the prefix when there is no search query

  const iconsToRender = searchQuery
    ? use(getSearchedIcon(searchQuery))
    : use(getIcons(prefix));

  return <IconPick iconsToRender={iconsToRender} onChangeIcon={onChangeIcon} />;
}

function IconPick({ iconsToRender, onChangeIcon }) {
  const parentRef = useRef();
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(iconsToRender.length / 7),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 24,
    overscan: 5,
  });
  return (
    <div
      ref={parentRef}
      style={{ height: iconsToRender.length * 24 }}
      className="py-2 w-full max-h-32 overflow-y-auto pretty-scroll"
    >
      <div className="relative flex flex-col">
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            style={{
              transform: `translateY(${virtualItem.start}px)`,
            }}
            key={virtualItem.key}
            className={cn("grid grid-cols-7 absolute transform")}
          >
            {iconsToRender
              .slice(virtualItem.index * 7, (virtualItem.index + 1) * 7)
              .map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className={cn(
                    "px-3 py-1 h-6 rounded-md cursor-pointer hover:bg-accent group flex justify-center items-center"
                  )}
                  onClick={() => onChangeIcon(icon)}
                >
                  <Icon
                    icon={icon}
                    className={cn(
                      "group-hover:text-accent-foreground text-base"
                    )}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IconPickerSkeleton() {
  const blankArray = Array.from({ length: 35 });
  return (
    <div className="grid grid-cols-7 gap-2 max-h-32 overflow-y-auto pretty-scroll">
      {blankArray.map((item, index) => (
        <div key={index}>
          <Skeleton className="h-6 w-4 rounded-md px-3 py-1" />
        </div>
      ))}
    </div>
  );
}

function IconProviderSelectSkeleton() {
  return (
    <div className="p-1">
      <Skeleton className="h-6 w-full rounded-sm" />
    </div>
  );
}
