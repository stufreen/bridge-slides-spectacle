import * as returnCode from "!raw-loader!./function-anatomy-return.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";
import { RETURN } from "../../links";

const Slide1 = ListSlideMaker("Returns", [
  "A return statement is something you should have in almost all of your functions",
  "Without a return, a function resolves to 'undefined'",
  "You can be very creative about what is returned - for example, you can return another function",
  "The result of a function return can be used immediately after that function has finished its business"
]);

const Slide2 = ReplClassSignup("Returns", RETURN.invite);
const Slide3 = ReplFrameSlide(RETURN.exercise1);
const Slide4 = ReplFrameSlide(RETURN.exercise2);

export const FAnatomyReturnSlideSet = [
  Slide1,
  BasicCodeSlideMaker(returnCode),
  Slide2,
  Slide3,
  Slide4
];
