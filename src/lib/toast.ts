import ToasterEmmiter from "./ToasterEmmiter";

export const toasterEmmiter = new ToasterEmmiter();

export const toast = {
  success: (message: string) => {
    toasterEmmiter.emit("toast", {
      message,
      id: crypto.randomUUID(),
      variant: "success",
    });
  },
};
