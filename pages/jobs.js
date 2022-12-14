import React from "react";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

const JobsPage = () => {
	return (
		<>
			<Head>
				<title>Business Name Here</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<AuthenticatedLayout>Jobs Page</AuthenticatedLayout>
			</MainLayout>
		</>
	);
};

export default JobsPage;
