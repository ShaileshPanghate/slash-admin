import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const Attendance = lazy(() => import("@/pages/employee/attendance"));
const Details = lazy(() => import("@/pages/employee/details"));

const employee: AppRouteObject = {
	order: 2,
	path: "employee",
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	meta: {
		label: "Employee",
		icon: <SvgIcon icon="ic-employee" className="ant-menu-item-icon" size="24" />,
		key: "/employee",
	},
	children: [
		{
			index: true,
			element: <Navigate to="details" replace />,
		},

		{
			path: "details",
			element: <Details />,
			meta: { label: "Details", key: "/employee/details" },
		},
		{
			path: "attendance",
			element: <Attendance />,
			meta: { label: "Attendance", key: "/employee/attendance" },
		},
	],
};

export default employee;
