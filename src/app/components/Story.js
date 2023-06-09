

export default function Story(props){

    return (
<div className=" ">
<img src={props.avatar}   className="rounded-full  w-14 h-14 p-[1.5px] border-red-600 border-2 hover:scale-110 transition-all duration-150 ease-out"/>
{/* <p className="text-center">{props.name.slice(0,Math.min(6,props.name.length))}{(props.name.length>7)?"...":""}</p> */}
<p className="text-xs text-center w-14 truncate">{props.name}</p>


</div>
    );
}