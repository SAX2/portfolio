import { bento } from '@/lib/data'
import { Skills, Websites } from '@/lib/types'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Bento = () => {
  return (
    <div className="w-full">
      <div className={bento.className}>
        {bento._.map((row, rowIndex) => (
          <div key={rowIndex} className={row.className}>
            {row._.map((item, itemIndex) => (
              <div
                key={`${rowIndex}-${itemIndex}`}
                className={cn(
                  item.className,
                  !item._ && "bg-grey-card border border-outline rounded-lg p-4"
                )}
              >
                {!item._ && (
                  <BentoItem
                    title={item.title ?? ""}
                    data={{
                      data: item.data?.data,
                      type: item.data?.type ?? "",
                    }}
                  />
                )}
                {item._ &&
                  item._.map((item, itemIndex) => (
                    <div
                      key={`${rowIndex}-${itemIndex}`}
                      className={cn(
                        item.className,
                        "bg-grey-card border border-outline rounded-lg p-4"
                      )}
                    >
                      <BentoItem
                        title={item.title ?? ""}
                        data={{
                          data: item.data?.data,
                          type: item.data?.type ?? "",
                        }}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const BentoItem = ({
  title,
  data,
}: {
  title: string;
  data: { type: string; data: any };
}) => {
  return (
    <div className="w-full h-fit flex flex-col gap-3">
      <h1 className="text-sm font-medium text-grey tracking-tight">{title}</h1>
      <div className="flex flex-col w-full gap-[10px]">
        {data.type !== "spotify" &&
          data.data &&
          data.data.map((item: any) => {
            return <BentoSubItem data={item} key={item.title} />;
          })}
      </div>
      {data.type === "skills" && (
        <Link href={"/skills"} className="rounded-md px-[6px] py-1 border border-outline-sec bg-grey-card-sec text-sm font-medium flex items-center gap-1 justify-center">
          See More <ChevronRight width={14} height={14} />
        </Link>
      )}
    </div>
  );
};

const BentoSubItem = ({ data }: { data: Skills | Websites }) => {
  return (
    <div className="w-full flex items-center gap-2">
      <div
        className={cn(
          data.image.background,
          "rounded-[8px] w-[45px] h-[45px] min-w-[45px] flex items-center justify-center"
        )}
      >
        {data.image.url && (
          <Image
            src={data.image.url}
            alt={data.title}
            width={400}
            height={400}
            quality={100}
            className={cn(
              data.image.noBgImage && "p-2 w-auto h-[45px]",
              "rounded-[8px] select-none"
            )}
          />
        )}
        {!data.image.url && (
          <span className="text-base font-semibold select-none">
            {data.title.charAt(0).toLocaleUpperCase()}
          </span>
        )}
      </div>
      <div className="flex justify-between gap-3 w-full items-center">
        <div className="w-full flex flex-col max-w-[170px]">
          <h3 className="text-base tracking-tight font-medium truncate w-full max-w-full text-black">{data.title}</h3>
          <p className="text-sm text-grey truncate w-full max-w-full">{data.description}</p>
        </div>
        <div className="w-fit">
          {data.url && (
            <a
              href={data.url}
              target='_blank'
              className="rounded-md px-[6px] py-1 border border-outline-sec bg-grey-card-sec text-sm font-medium"
            >
              View
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bento