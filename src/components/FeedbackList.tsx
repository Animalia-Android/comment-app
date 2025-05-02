import { TriangleUpIcon } from '@radix-ui/react-icons';

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>

        <div>
          <p>Sellers Incorporated</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At esse
            exercitationem perspiciatis. Exercitationem, illum facere?
          </p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  );
}
