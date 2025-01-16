 import { PiX } from "react-icons/pi";
import Add from "../components/Add";
import Password from "../components/ConditionalRendring";
import ContentOfComponent from "../components/ContentOfComponent";
import Greet from "../components/greet";
import Icon from "../components/Icon";
import ProductList from "../components/ProductList";
import Props, { ChildComponent } from "../components/Props";
import Style from "../components/Style";

import EventHandling from "../components/EventHandling";
import { Counter } from "../components/Counter";
import Counterr from "../components/useState Component Practice/Counterr";
import AddNewFriend from "../components/useState Component Practice/AddNewFriend";
import MovieObject from "../components/useState Component Practice/MovieObject";
import ArrayOfObject from "../components/useState Component Practice/ArrayOfObject";
import RetriveStateComponentTwo from "../components/useState Component Practice/RetriveStateComponentTwo";
import RetriveStateComponentOne from "../components/useState Component Practice/RetriveStateComponentOne";
import PassingStateToAnotherComponent from "../components/useState Component Practice/PassingStateToAnotherComponent";
import IntialValue from "../components/useState Component Practice/Passing arrow function or function in UseState/IntialValue";
import ExampleTwo from "../components/useState Component Practice/Passing arrow function or function in UseState/ExampleTwo";
import ExampleThree from "../components/useState Component Practice/Passing arrow function or function in UseState/ExampleThree";
import ToList from "../components/useState Component Practice/Exercise/ToList";
import LecTodoList from "../components/useState Component Practice/Exercise/LecTodoList";
import Profile from "../components/useState Component Practice/Exercise/Profile";
import ShopingList from "../components/useState Component Practice/Exercise/ShopingList";
import CopyInput from "../components/Portal/CopyInput";
import Switcher from "../components/Portal/Switcher";
import Counter1 from "../components/useEffect/Counter1";
import FetchingData from "../components/useEffect/FetchingData";
import Sample2 from "../components/useContext and ContextAPI/Sample2";
import PropDrilling from "../components/useContext and ContextAPI/PropDrilling";
import Sample1 from "../components/useContext and ContextAPI/Sample1";
import Sender from "../components/useContext and ContextAPI/ContextAPI/Sender";
import Sender1 from "../components/useContext and ContextAPI/useContext/Sender1";
import UserProvider from "../components/useContext and ContextAPI/Excercise/UserProvider";
import UserProfile from "../components/useContext and ContextAPI/Excercise/UserProfile";
import UpdateUser from "../components/useContext and ContextAPI/Excercise/UpdateUser";
import CounterByUsingUseReducer from "../components/useReducer/CounterByUsingUseReducer";
import ExByuseRef from "../components/useRef/ExByuseRef";
import Timer from "../components/useRef/Timer";
import Cmp from "../components/Custom Hook/Cmp";
import UniqueId from "../components/useId/UniqueId";
import TodoList from "../components/React+JS Projects/TodoList";
import Meal from "../components/React+JS Projects/Meal";
import Calculator from "../components/React+JS Projects/Calculator";
import ToggleBackgroundColor from "../components/React+JS Projects/ToggleBackgroundColor";
import HiddenSearchBar from "../components/React+JS Projects/HiddenSearchBar";
import Testimonial from "../components/React+JS Projects/Testimonial";
import acordianData from "../components/React+JS Projects/acordianData"
import Acordian from "../components/React+JS Projects/acordian";
import FormValidation from "../components/React+JS Projects/FormValidation";

 const App = () => {

  return (
    <>
    {/* <Greet/>
    <Add />
    <ProductList/>
    <Props/>
    <ContentOfComponent>
      <h1>This is content passing to child via a parent component just like props</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum laboriosam explicabo consequatur eum! Reprehenderit ea cupiditate nobis architecto adipisci dolores tempore eum corrupti.</p>
    </ContentOfComponent>

    <Password isValid={true}/>
    <Style/>
    <Icon />
    <EventHandling/>
    <Counter/> */}

    {/* <Counterr/>
    <AddNewFriend/>
    <MovieObject/>
    <ArrayOfObject/>

<PassingStateToAnotherComponent/>
 <IntialValue/>

 <ExampleTwo/>
 <ExampleThree/>
 <ToList/>
 <LecTodoList/>
 <Profile/>
 <ShopingList/>
 <CopyInput/>
 <Switcher/>
<Counter1/>
 <FetchingData/>
 <Props/>
<PropDrilling/>
<Sender/>
 <Sender1/>

 <UserProvider>
      <UserProfile/>
      <UpdateUser/>
 </UserProvider>

 <CounterByUsingUseReducer/>
   <ExByuseRef/>
   <Timer/>
   <Cmp/>
   <UniqueId/>
   <UniqueId/>
   <TodoList/>

   <Meal/>
   <Calculator/>
<ToggleBackgroundColor/>
 <HiddenSearchBar/>
   <Testimonial/>
   
    {
      acordianData.map(({title,content})=>(
          <Acordian title = {title} content = {content} key={Math.random()}/>
      ))
    }
   
        */}
        <FormValidation/>
    </>
  )
}

export default App;