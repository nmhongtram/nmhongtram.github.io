import * as en from "./engineer";
import { profile, experience, publications, research } from "./portfolio.vi";

export const engineerProfile = {
  ...profile,
  cv: en.engineerProfile.cv,
  headline: "Tôi xây dựng hệ thống AI đa phương thức cho công việc thực tế.",
  summary:
    "Tôi làm việc với OCR, mô hình ngôn ngữ, truy xuất thông tin, suy luận thị giác và suy luận trên trình duyệt — từ triển khai, đánh giá đến đưa vào sử dụng.",
} as const;

export const engineerCopy = {
  explore: "Xem dự án tiêu biểu",
  readCv: "Xem CV kỹ sư",
  buildsTitle: "Dự án tiêu biểu",
  buildsIntro:
    "Những hệ thống tôi xây dựng, các lựa chọn kỹ thuật và bằng chứng có thể xem công khai.",
  problem: "Bài toán",
  contribution: "Phần việc tôi thực hiện",
  approach: "Giải pháp kỹ thuật",
  evidence: "Bằng chứng",
  experienceTitle: "Kinh nghiệm kỹ thuật",
  experienceIntro:
    "Công việc ứng dụng về quy trình đa phương thức, hiểu video và suy luận trên trình duyệt.",
  capabilitiesTitle: "Cách tôi làm việc",
  capabilitiesIntro:
    "Công cụ được đặt trong bối cảnh các hệ thống mà chúng giúp tôi xây dựng.",
  recognitionTitle: "Nền tảng nghiên cứu",
  recognitionIntro:
    "Công bố và ghi nhận đã góp phần định hình cách tôi làm kỹ thuật.",
  contactTitle: "Cùng xây dựng một sản phẩm hữu ích.",
  contactIntro:
    "Bạn quan tâm đến AI ứng dụng, hệ thống đa phương thức hoặc triển khai mô hình? Hãy liên hệ với tôi.",
  backToTop: "Về đầu trang",
  code: "Xem mã nguồn công khai",
  demo: "Mở demo công khai",
} as const;

export const engineerBuilds = [
  {
    ...en.engineerBuilds[0],
    subtitle: "Hỗ trợ chấm bài Toán bằng AI",
    problem:
      "Giúp giáo viên xem lại bài Toán trung học với phản hồi nháp dựa trên bằng chứng và phân tích lỗi ở cấp lớp.",
    contribution:
      "Tôi trực tiếp xây dựng luồng OCR, tích hợp LLM API, RAG và frontend; đồng thời phụ trách quản lý dự án và tài liệu.",
    approach:
      "Quy trình có giáo viên kiểm duyệt kết hợp chấm bài đa phương thức, truy xuất có nguồn, phân luồng theo độ tin cậy, kiểm tra trích dẫn, bảo vệ dữ liệu cá nhân và rà soát của con người.",
    evidence:
      "Demo capstone công khai cho thấy quy trình sản phẩm; hệ thống cũng dùng bộ mẫu chuẩn để đánh giá.",
    linkLabel: engineerCopy.demo,
  },
  {
    ...en.engineerBuilds[1],
    title: "Suy luận ngôn ngữ ký hiệu trên trình duyệt",
    subtitle: "TMA Solutions · thực tập kỹ sư AI",
    problem:
      "Đưa nhận dạng ngôn ngữ ký hiệu liên tục vào môi trường trình duyệt theo thời gian thực.",
    contribution:
      "Tôi nghiên cứu nhận dạng ngôn ngữ ký hiệu liên tục và tạo avatar 3D từ văn bản, rồi xây dựng luồng suy luận từ mô hình PyTorch đến trình duyệt.",
    approach:
      "Chuyển suy luận mô hình sang ONNX Runtime Web và tích hợp thành một quy trình chạy trên trình duyệt.",
    evidence:
      "Quy trình được đánh giá trong bối cảnh trò chuyện video theo thời gian thực.",
  },
  {
    ...en.engineerBuilds[2],
    subtitle: "Hỏi đáp hình ảnh phẫu thuật đa phương thức",
    problem: research[0].question,
    contribution: research[0].contribution,
    approach:
      "Kết hợp biểu diễn thị giác, xử lý ngôn ngữ và suy luận đồ thị về quan hệ giữa các đối tượng trong một quy trình VQA đầu cuối.",
    evidence: research[0].evidence,
    linkLabel: engineerCopy.code,
  },
  {
    ...en.engineerBuilds[3],
    title: "Quy trình dự báo chất lượng không khí",
    subtitle: "Bản thử nghiệm dự báo · đồ án nhóm tại UEH",
    problem:
      "Dự báo chất lượng không khí từ dữ liệu OpenAQ và cung cấp kết quả qua API cùng bảng theo dõi.",
    contribution:
      "Tôi trực tiếp triển khai toàn bộ phần kỹ thuật: thu thập và xử lý dữ liệu OpenAQ, huấn luyện RNN/LSTM/GRU, suy luận qua FastAPI, bảng theo dõi Streamlit và đóng gói Docker.",
    approach:
      "So sánh các mô hình dự báo chuỗi thời gian rồi kết nối suy luận với bảng theo dõi qua API được đóng gói bằng container.",
    evidence:
      "Repo công khai có mã nguồn, hướng dẫn chạy và đánh giá mô hình. Demo trực tuyến hiện không còn hoạt động.",
    linkLabel: engineerCopy.code,
  },
] as const;

export const engineerExperience = experience.slice(0, 2);
export const engineerPublications = publications;
export const engineerCapabilities = [
  {
    title: "AI ứng dụng",
    detail: "OCR, LLM API, RAG và quy trình đa phương thức trong GradeMind.",
  },
  {
    title: "Phát triển mô hình",
    detail:
      "PyTorch, quy trình thị giác–ngôn ngữ, suy luận đồ thị và đánh giá có kiểm soát.",
  },
  {
    title: "Suy luận và triển khai",
    detail: "ONNX Runtime Web, SGLang, FastAPI, PostgreSQL/pgvector và Docker.",
  },
] as const;
