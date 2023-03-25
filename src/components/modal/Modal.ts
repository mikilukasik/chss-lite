import "./modal.scss";

import { component, createState, handler, html } from "../../../litState/src";

const modalState = createState({
  open: false,
  content: "",
  resolve: (result: any) => {},
});

export const renderModal = (
  contentRenderer: (resolver: (result: any) => void) => string
) =>
  new Promise<any>((resolve) => {
    const resolveAndClose = (val: any) => {
      modalState.open = false;
      resolve(val);
    };

    Object.assign(modalState, {
      content: contentRenderer(resolveAndClose),
      open: true,
      resolve,
    });
  });

const closeModal = handler((e, t) => {
  e.preventDefault();
  if (t.id === "modal-container" || t.id === "modal-close-button") {
    modalState.open = false;
    modalState.resolve(null);
  }
});

export const Modal = component(
  () => html`
    <div
      class="modal-container${modalState.open ? " open" : ""}"
      onclick="${closeModal}"
      id="modal-container"
    >
      <div
        class="modal-content"
        id="modal-content"
        onclick="event.stopPropagation()"
      >
        <span class="close" onclick="${closeModal}" id="modal-close-button"
          >&times;</span
        >
        ${modalState.content}
      </div>
    </div>
  `
);
