import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import PropertyEditor from "./property-editor";

export function AppSidebar({
  pageData,
  selectedPage,
  onUpdate,
  onLocalUpdate,
}) {
  return (
    <Sidebar className="" variant="sidebar" side="left">
      <SidebarHeader className="p-4 border-b">
        <h2 className="text-lg font-semibold">Editor</h2>
      </SidebarHeader>
      <SidebarContent className="pretty-scroll">
        <PropertyEditor
          pageData={pageData}
          selectedPage={selectedPage}
          onUpdate={onUpdate}
          onLocalUpdate={onLocalUpdate}
        />
      </SidebarContent>
    </Sidebar>
  );
}
