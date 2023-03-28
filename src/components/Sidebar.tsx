import { NavLink } from "./NavLink"
import { Logo } from "./icons/Logo"

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Guides
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="" children="Introduction" />
            <NavLink href="" children="Quickstart" />
            <NavLink href="" children="SDKs" />
            <NavLink href="" children="Authentication" />
            <NavLink href="" children="Pagination" />
            <NavLink href="" children="Errors" />
            <NavLink href="" children="Webhooks"/>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="" children="Contacts" />
            <NavLink href="" children="Conversations" />
            <NavLink href="" children="Messages" />
            <NavLink href="" children="Groups" />
            <NavLink href="" children="Attachments" />
          </div>
        </div>
      </nav>
    </aside>
  )
}