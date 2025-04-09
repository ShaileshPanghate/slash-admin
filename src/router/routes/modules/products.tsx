import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const ProductsR = lazy(() => import("@/pages/products/products"));

const Products: AppRouteObject = {
	order: 2,
	path: "products",
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	meta: {
		label: "Products",
		icon: <SvgIcon icon="ic-inventory" className="ant-menu-item-icon" size="24" />,
		key: "/products",
	},
	children: [
		{
			index: true,
			element: <Navigate to="products/products" replace />,
		},
		{
			path: "products",
			element: <ProductsR />,
			meta: { label: "Products", key: "/products/products" },
		},
	],
};

export default Products;
