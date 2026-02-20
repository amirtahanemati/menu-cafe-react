import { Toaster } from "react-hot-toast";
import MenuPage from "./pages/MenuPage";

export default function App() {
  return (
    <>
      <Toaster
        position="top-left"
        gutter={8}
        containerStyle={{
          top: 16, // بالاتر از دکمه سبد خرید
        }}
        toastOptions={{
          duration: 2200,
          // استایل پایه برای همه toast ها
          style: {
            fontFamily: "'Dana', sans-serif",
            direction: "rtl",
            borderRadius: "16px",
            fontSize: "13px",
            fontWeight: "600",
            padding: "12px 16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            background: "#1a2820",
            color: "#e8f5e9",
            border: "1px solid rgba(82,183,136,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minWidth: "220px",
            maxWidth: "320px",
          },
          // toast موفق (افزودن)
          success: {
            style: {
              background: "#1a2820",
              color: "#e8f5e9",
              border: "1px solid rgba(82,183,136,0.3)",
            },
            iconTheme: {
              primary: "#52b788",
              secondary: "#1a2820",
            },
          },
          // toast معمولی (حذف)
          blank: {
            style: {
              background: "#221a1a",
              color: "#fde8e8",
              border: "1px solid rgba(239,68,68,0.25)",
            },
          },
        }}
      />
      <MenuPage />
    </>
  );
}
