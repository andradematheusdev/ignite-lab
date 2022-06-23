import { format, isPast } from "date-fns";
import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  description: string;
  availableAt: string;
  lessonType: "live" | "class";
}

export const Lesson = (props: LessonProps) => {
  const formatedDate = new Date(props.availableAt);
  const isLessonAvailableAt = isPast(formatedDate);

  return (
    <a href={props.slug}>
      <span className="block mb-2 text-gray-300">
        {format(formatedDate, "eeee' • 'dd' de 'LLLL' • 'HH'h'mm")}
      </span>

      <div className="flex flex-col w-full justify-center border border-gray-500 p-4 rounded">
        <header className="flex w-full items-center justify-between mb-4">
          {isLessonAvailableAt ? (
            <span className="flex flex-row items-center text-sm text-blue-500 font-medium">
              <CheckCircle size={24} className="mr-[10.5px]" />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex flex-row items-center text-sm text-orange-500 font-medium">
              <Lock size={24} className="mr-[10.5px]" />
              Em Breve
            </span>
          )}
          <span className="text-xs font-bold py-[2px] px-2 border border-green-300 rounded">
            {props.lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="">{props.title}</strong>
      </div>
    </a>
  );
};