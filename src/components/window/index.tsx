import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface IWindowProps {
  isOpen?: boolean;
}
export default function (props: IWindowProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button">open</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">1</div>
        </div>
        <DialogFooter>footer</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
