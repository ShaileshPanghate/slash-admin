import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const ProjectsM = lazy(() => import("@/pages/projects/projects"));

const Projects: AppRouteObject = {
	order: 2,
	path: "projects",
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	meta: {
		label: "Projects",
		icon: <SvgIcon icon="ic-folder" className="ant-menu-item-icon" size="24" />,
		key: "/projects",
	},
	children: [
		{
			index: true,
			element: <Navigate to="projects/projects" replace />,
		},
		{
			path: "projects",
			element: <ProjectsM />,
			meta: { label: "Projects", key: "/projects/projects" },
		},
	],
};

export default Projects;
