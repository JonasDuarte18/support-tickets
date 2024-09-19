import { create } from "../constrollers/tickets/create.js";
import { index } from "../constrollers/tickets/index.js";
import { remove } from "../constrollers/tickets/remove.js";
import { update } from "../constrollers/tickets/update.js";
import { updateStatus } from "../constrollers/tickets/updateStatus.js";

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus,
  },
  {
    method: "DELETE",
    path: "/tickets/:id",
    controller: remove,
  },
];
