import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
export default function Markdown({ contents }) {
  return (
    <div className="prose prose-gray max-w-none">
      <ReactMarkdown
      remarkPlugins={[remarkGfm]}
        components={{
          img: ({ ...props }) => (
            <img
              {...props}
              className="w-[85%] sm:w-[55%] lg:w-[35%] rounded-xl my-6 shadow-md"
              alt={props.alt}
            />
          ),

          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-5">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="text-gray-700 leading-8 mb-4">
              {children}
            </p>
          ),

          strong: ({ children }) => (
            <strong className="font-bold text-gray-900">
              {children}
            </strong>
          ),

          em: ({ children }) => (
            <em className="italic">
              {children}
            </em>
          ),

          a: ({ children, href }) => (
            <Link
              href={href}
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              {children}
            </Link>
          ),

          ul: ({ children }) => (
            <ul className="list-disc pl-6 space-y-2 mb-5">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="list-decimal pl-6 space-y-2 mb-5">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="text-gray-700">
              {children}
            </li>
          ),

          hr: () => (
            <hr className="my-10 border-gray-300" />
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-5 py-3 italic my-6 rounded-r-lg">
              {children}
            </blockquote>
          ),

          inlineCode: ({ children }) => (
            <code className="bg-gray-100 px-1.5 py-1 rounded text-red-600">
              {children}
            </code>
          ),

          code: ({ children }) => (
            <pre className="bg-gray-900 text-white rounded-xl p-5 overflow-x-auto my-6">
              <code>{children}</code>
            </pre>
          ),

          table: ({ children }) => (
            <div className="overflow-x-auto my-8">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-gray-100">
              {children}
            </thead>
          ),

          tbody: ({ children }) => (
            <tbody>{children}</tbody>
          ),

          tr: ({ children }) => (
            <tr className="border-b border-gray-200">
              {children}
            </tr>
          ),

          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-semibold text-gray-800">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="px-4 py-3 text-gray-700">
              {children}
            </td>
          ),
        }}
      >
        {typeof contents === "string" ? contents : ""}
      </ReactMarkdown>
    </div>
  );
}