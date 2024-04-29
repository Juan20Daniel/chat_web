import { lazy } from "react";
const IndexLayout = lazy(() => import('./layouts/indexLayout/IndexLayout'));
const FormLayout = lazy(() => import('./layouts/formLayout/FormLayout'));
export const routes = [
    {
        path: '/*',
        Component: IndexLayout,
        name:'Home-layout'
    },
    {
        path:'/form-layout/*',
        Component: FormLayout,
        name:'FormLayout',
    }
]