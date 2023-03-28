import { NavLink } from "./NavLink"
import { Logo } from "./icons/Logo"

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden lg:block">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Guides
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/test/a" children="Introduction" />
            <NavLink href="/test/b" children="Quickstart" />
            <NavLink href="/test/c" children="SDKs" />
            <NavLink href="/test/d" children="Authentication" />
            <NavLink href="/test/e" children="Pagination" />
            <NavLink href="/test/f" children="Errors" />
            <NavLink href="/test/g" children="Webhooks"/>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/test/h" children="Contacts" />
            <NavLink href="/test/i" children="Conversations" />
            <NavLink href="/test/j" children="Messages" />
            <NavLink href="/test/k" children="Groups" />
            <NavLink href="/test/l" children="Attachments" />
          </div>
        </div>
      </nav>
    </aside>
  )
}