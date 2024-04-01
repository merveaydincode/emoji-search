import Avatar from "../components/Avatar";
import Card from "../components/Card";
import CardLink from "../components/CardLink";

const HomeScreen = () => {
  const links = [
    { name: "Github", href: "#", emoji: "👨‍💻" },
    { name: "FrontendMentor", href: "#", emoji: "🚀" },
    { name: "LinkedIn", href: "#", emoji: "👔" },
    { name: "Twitter", href: "#", emoji: "🐦" },
    { name: "Instagram", href: "#", emoji: "📸" },
  ];

  return (
    <main className="flex h-dvh w-full flex-1 items-center justify-center bg-slate-50 dark:bg-dark ">
      <Card>
        <Avatar src="me.jpg" alt="Zafer AYAN" />
        <span className="mt-4 font-semibold">Zafer AYAN</span>
        <span className="mt-0 font-semibold text-lime">Istanbul/TURKEY</span>
        <span className="mt-4">Frontend Developer and avid reader</span>
        <div className="mt-8 flex w-full flex-col gap-4 text-center">
          {links.map((link) => (
            <CardLink key={link.name} href={link.href} emoji={link.emoji}>
              {link.name}
            </CardLink>
          ))}
        </div>
      </Card>
    </main>
  );
};

export default HomeScreen;
