import { FC } from "react";

interface Props {
    name: string;
    imageUrl: string;
    since: string;
}

export const MemberCard: FC<Props> = (props) => {

    return (
        <div
            className="dark:backdrop-brightness-75 backdrop-blur-xl p-5 rounded-2xl shadow-lg block sm:flex 2xl:block sm:hover:scale-[105%] transition-all duration-[120ms] ease-in-out sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-900"
        >
            <img
                className="rounded-full mx-auto shadow-lg mb-4"
                src={props.imageUrl}
                width={150}
                height={150}
                alt={props.name}
            />
            <div>
                <p className="mb-2 text-center font-medium text-xl">
                    {props.name}
                </p>
                <p className="text-center">
                    Since <code>{props.since}</code>
                </p>
            </div>
        </div>
    );
}