
import FeedbackItem from './FeedbackItem'; // ✅ Import FeedbackItem

function Feedback({ feedback }) {
  if (feedback.length === 0) return <h3>No feedback available</h3>;

  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} /> // ✅ Use FeedbackItem
      ))}
    </div>
  );
}

export default Feedback;
