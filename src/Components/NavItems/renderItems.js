
// Components
import { TaskList } from "../AddToDo/taskList";

export const RenderItems = ({ section }) => {

    let elements;

    switch(section){
        case "Hourly":
            elements = <>
                <TaskList />
            </>
            break;
        case "Daily":
            elements = <></>
            break;
        case "Weekly":
            elements = <></>
            break;
        case "Monthly":
            elements = <></>
            break;
    }

    return elements;
}
