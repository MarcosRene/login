import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

import Button from "../../../../components/Button";
import "./styles.css";

function Schedule() {
  return (
    <ul className="schedules-container">
      <li>
        <div className="schedules-item-head">
          <Link to="/edit-schedule/1234">#00000000</Link>

          <div>
            <Button>
              <Pencil size={16} />
            </Button>

            <Button>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>

        <div className="schedules-item-body">
          <span>
            Professor:
            <span>Marcos</span>
          </span>

          <span>TCC</span>

          <span>Falar sobre o tema do meu TCC</span>
        </div>

        <span className="schedules-item-date">• 04 de março, às 10:00.</span>
      </li>

      <li>
        <div className="schedules-item-head">
          <Link to="/edit-schedule/1234">#00000000</Link>

          <div>
            <Button>
              <Pencil size={16} />
            </Button>

            <Button>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>

        <div className="schedules-item-body">
          <span>
            Professor:
            <span>Marcos</span>
          </span>

          <span>TCC</span>

          <span>Falar sobre o tema do meu TCC</span>
        </div>

        <span className="schedules-item-date">• 04 de março, às 10:00.</span>
      </li>

      <li>
        <div className="schedules-item-head">
          <Link to="/edit-schedule/1234">#00000000</Link>

          <div>
            <Button>
              <Pencil size={16} />
            </Button>

            <Button>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>

        <div className="schedules-item-body">
          <span>
            Professor:
            <span>Marcos</span>
          </span>

          <span>TCC</span>

          <span>Falar sobre o tema do meu TCC</span>
        </div>

        <span className="schedules-item-date">• 04 de março, às 10:00.</span>
      </li>

      <li>
        <div className="schedules-item-head">
          <Link to="/edit-schedule/1234">#00000000</Link>

          <div>
            <Button>
              <Pencil size={16} />
            </Button>

            <Button>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>

        <div className="schedules-item-body">
          <span>
            Professor:
            <span>Marcos</span>
          </span>

          <span>TCC</span>

          <span>Falar sobre o tema do meu TCC</span>
        </div>

        <span className="schedules-item-date">• 04 de março, às 10:00.</span>
      </li>

      <li>
        <div className="schedules-item-head">
          <Link to="/">#00000000</Link>

          <div>
            <Button>
              <Pencil size={16} />
            </Button>

            <Button>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>

        <div className="schedules-item-body">
          <span>
            Professor:
            <span>Marcos</span>
          </span>

          <span>TCC</span>

          <span>Falar sobre o tema do meu TCC</span>
        </div>

        <span className="schedules-item-date">• 04 de março, às 10:00.</span>
      </li>
    </ul>
  );
}

export default Schedule;
