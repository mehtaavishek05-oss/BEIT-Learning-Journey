const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;