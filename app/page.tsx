import DarkMode from "./components/darkmode";
import Header from "./components/header";
import Tasks from "./components/tasks";


export default function Home() {
  return (
    <div>
      <main>
        <Header />  
        <Tasks />
        <DarkMode />
      </main>
    </div>
  );
}
