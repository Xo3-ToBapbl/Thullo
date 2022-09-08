import { media } from "../../../components/media/MediaQueris";

export default function Content() {
  return (
    <div>
      <media.Desktop>
        Desktop
      </media.Desktop>

      <media.Tablet>
        Tablet
      </media.Tablet>

      <media.Mobile>
        Mobile
      </media.Mobile>
    </div>
  );
}