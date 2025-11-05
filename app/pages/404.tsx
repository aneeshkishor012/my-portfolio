export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">404</h1>
            <p className="text-gray-600 dark:text-gray-400">
                Oops! Page not found. Go back to{" "}
                <a href="/" className="text-blue-600 hover:underline">Home</a>.
            </p>
        </div>
    );
}
