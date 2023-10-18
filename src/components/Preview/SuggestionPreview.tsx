import Image from 'next/image';
import { StarSVG } from '@/icons/svg';

interface ISuggestionProps {
  title: string;
  range: string;
  review: string;
  image: string;
}

const SuggestionPreview = ({
  title,
  range,
  review,
  image,
}: ISuggestionProps) => {
  return (
    <div className="shadow-horizontal flex h-[105.91px] w-[19.5rem] gap-[0.69rem] rounded-[0.3125rem] bg-white p-[0.56rem]">
      <Image
        width={132}
        height={97}
        style={{ objectFit: 'cover' }}
        alt="Connection AI 추천 클래스 이미지"
        src={image}
      />

      <div className="flex  w-1/2 flex-col whitespace-pre-line break-keep text-sm text-sub-color3">
        <p className="flex flex-1 items-start">{title}</p>
        <div className="flex items-end justify-between">
          <span>{range}</span>
          <span className="flex items-center">
            <StarSVG width={15} height={14} className="mr-1 fill-sub-color1" />
            {review}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionPreview;
