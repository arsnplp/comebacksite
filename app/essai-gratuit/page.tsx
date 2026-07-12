import { permanentRedirect } from "next/navigation";

/**
 * Les CTA d'essai pointent désormais directement vers l'application.
 * L'ancienne URL est conservée en redirection permanente pour les
 * favoris et liens externes existants.
 */
export default function EssaiGratuitPage() {
  permanentRedirect("https://app.getcomeback.fr/login");
}
