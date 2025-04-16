
import { ArrowRight, Database, Calculator, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header Section */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center items-center">
            <img 
              src="https://sim.cas.cn/images/simtlogo.png" 
              alt="SIMIT Logo"
              className="h-16 object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mt-4">
            中国科学院上海微系统与信息技术研究所
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            ICMagent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            集成电路材料大模型
          </p>
        </div>

        {/* Chatbot iframe */}
        <div className="mb-16">
          <iframe
            src="https://udify.app/chatbot/WueWtinbjKErkQck"
            style={{ width: '100%', height: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="ICMagent Chatbot"
          />
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Database Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Database className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">数据库</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                全面的材料科学数据收集与管理系统
              </p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                查看更多 <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </Card>

          {/* Calculation Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Calculator className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">计算模拟库</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                先进的材料性能计算与模拟工具
              </p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                查看更多 <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </Card>

          {/* Property Prediction Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <FileText className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">性质预测库</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                基于AI的材料性质预测与分析系统
              </p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                查看更多 <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;

