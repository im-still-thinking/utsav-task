export default function reviewSection({ review, author }) {
  return (
    <div class="bg-white/10 rounded-lg shadow-md p-6">
        <p class="text-white mb-4">{review}</p>
        <p class="text-white font-bold">{author}</p>
    </div>
  );
}
