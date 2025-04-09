import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const Report = lazy(() => import("@/pages/accReport/report"));

const accReport: AppRouteObject = {
	order: 2,
	path: "accReport",
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	meta: {
		label: "Accounts Report",
		icon: <SvgIcon icon="ic-report" className="ant-menu-item-icon" size="24" />,
		key: "/accReport",
	},
	children: [
		{
			index: true,
			element: <Navigate to="accReport/report" replace />,
		},
		{
			path: "report",
			element: <Report />,
			meta: { label: "Report", key: "/accReport/report" },
		},
	],
};

export default accReport;
