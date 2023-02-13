import { routes_config } from "@/router/router.config";
import { TItems } from "@/components/NavCard/type";
const root_config: TItems[] = [];

routes_config.forEach((item) => {
    root_config.push({
        title: item.meta.title,
        link: item.path,
        description: item.meta.description,
        icon: item.meta.icon,
    });
});

export { root_config };