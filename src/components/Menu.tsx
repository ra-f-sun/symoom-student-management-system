import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/dashboard/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/dashboard/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/guardian.png",
        label: "guardians",
        href: "/dashboard/list/guardians",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/dashboard/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/dashboard/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/dashboard/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/dashboard/list/exams",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/dashboard/list/assignments",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/dashboard/list/results",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/dashboard/list/attendance",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/dashboard/list/events",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/dashboard/list/messages",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/dashboard/list/announcements",
        visible: ["admin", "teacher", "student", "guardian"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "guardian"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "guardian"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col gap-2 p-2 text-sm">
      {menuItems.map((i) => (
        <div key={i.title}>
          <span className="hidden lg:block text-gray-600">{i.title}</span>
          {i.items.map((item) => {
            if (item.visible.includes(role))
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start py-2 hover:bg-purple-200"
                >
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block px-2">{item.label}</span>
                </Link>
              );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
