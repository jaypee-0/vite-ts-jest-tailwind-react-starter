import React, {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal} from "react";

export default function Button(props: {
  children:
    | string
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return <button className="bg-gray-500 text-white rounded-md px-4 hover:bg-slate-400 ">{props.children}</button>;
}
