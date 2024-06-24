import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "../../../components/Breadcrumbs";
import Input from "../../../components/Input";

import Schedule from "./Schedule";

import "./styles.css";

function Schedules() {
  return (
    <section className="dashboard-container">
      <div className="dashboard-header">
        <Breadcrumbs
          options={[
            { label: "Início", path: "/schedules", activeLink: false },
          ]}
        />

        <Link to="/new-schedule" className="link-new-schedule">
          Criar
          <Plus size={20} />
        </Link>
      </div>

      <div className="dashboard-content">
        <Input placeholder="Buscar por um agendamento" />

        <div className="schedules-list">
          <Schedule />
        </div>
      </div>
    </section>
  );
}

export default Schedules;
