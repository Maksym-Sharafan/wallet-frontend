import { Routes, Route } from "react-router";
import AppBar from "../components/AppBar";
import HomeTab from "../components/HomeTab";
import Header from "../components/Header";
// import Statistics from "../components/Statistics"

import styles from "./DashboardPage.module.css";

export default function DashboardPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <AppBar />
                <Routes>
                    <Route path="/home" index element={<HomeTab />} />
                    {/* <Route path="/statistics" index element={<Statistics  />} /> */}
                </Routes>
            </main>
        </>
    );
}