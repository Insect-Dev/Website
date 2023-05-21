import { FC } from "react";

interface Props {
    name: string;
    imageUrl: string;
    since: string;
}

export const MemberCard: FC<Props> = (props) => {
    return (
        <div className="block rounded-2xl p-5 shadow-lg backdrop-blur-xl transition-all duration-[120ms] ease-in-out dark:backdrop-brightness-75 sm:flex sm:hover:scale-[105%] sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-900 2xl:block">
            <img
                className="mx-auto mb-4 rounded-full shadow-lg"
                src={props.imageUrl}
                width={150}
                height={150}
                alt={props.name}
            />
            <div>
                <p className="mb-2 text-center text-xl font-medium">
                    {props.name}
                </p>
                <p className="text-center">
                    Since <code>{props.since}</code>
                </p>
            </div>
        </div>
    );
};
