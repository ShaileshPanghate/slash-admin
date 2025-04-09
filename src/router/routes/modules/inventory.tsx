import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const InventoryP = lazy(() => import("@/pages/inventory/inventory"));

const Inventory: AppRouteObject = {
	order: 2,
	path: "inventory",
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	meta: {
		label: "Inventory",
		icon: <SvgIcon icon="ic-inventory" className="ant-menu-item-icon" size="24" />,
		key: "/inventory",
	},
	children: [
		{
			index: true,
			element: <Navigate to="inventory/inventory" replace />,
		},
		{
			path: "inventory",
			element: <InventoryP />,
			meta: { label: "Inventory", key: "/inventory/inventory" },
		},
	],
};

export default Inventory;
