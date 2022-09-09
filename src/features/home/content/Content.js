import { media } from "../../../components/media/MediaQueries";

export default function Content() {
  return (
    <div>
      <media.Desktop>
        Desktop
      </media.Desktop>

      <media.Tablet>
        Tablet
      </media.Tablet>

      <media.TabletAndBellow>
        Tablet and bellow
      </media.TabletAndBellow>

      <media.Mobile>
        Mobile
      </media.Mobile>
    </div>
  );
}