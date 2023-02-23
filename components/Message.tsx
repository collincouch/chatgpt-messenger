import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
export default function Message({ message }: Props) {
  return (
    <div>
      <div>
        <img src={message.user?.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}
