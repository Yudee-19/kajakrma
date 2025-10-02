//app/services/page.tsx
import HeadContent from "@/components/pages/servicesmenu/allServiceHeader";
import ServiceContent from "@/components/pages/servicesmenu/allServiceCategory";
const ServicesMenu = () => {
  return (
    <main className="w-full">
   <HeadContent/>
   <ServiceContent/>
    </main>
  );
};

export default ServicesMenu;