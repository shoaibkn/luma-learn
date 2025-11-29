const YourCourseCard = () => {
  return (
    <div className="bg-accent rounded-xl shadow-none p-4 w-64 flex flex-row gap-0">
      <div className="bg-white w-1/3"></div>
      <h2 className="text-xl font-bold mb-2">Your Course</h2>
      <p className="text-gray-600">Description of your course</p>
    </div>
  );
};

export default YourCourseCard;
