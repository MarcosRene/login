import Breadcrumbs from "../../../components/Breadcrumbs"

import "./styles.css"

function Schedules() {
  return (
    <Breadcrumbs options={[{ label: "Geral", path: "/", activeLink: false }, { label: "Dashboard", path: "/schedules", activeLink: true }]}/>
  )
}

export default Schedules