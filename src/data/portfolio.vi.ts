import * as en from "./portfolio";

// Keep names, dates, metrics, links, and publication titles tied to the source record.
export const profile = {
  ...en.profile,
  role: "Nhà nghiên cứu AI",
  headline: "Tôi nghiên cứu cách AI hiểu hành động, thời gian và sự tương tác.",
  summary:
    "Hướng nghiên cứu của tôi đi từ thị giác máy tính và hỏi đáp hình ảnh y khoa đến hiểu dữ liệu đa phương thức và video. Gần đây, tôi tập trung vào việc định vị hành động theo thời gian trong video góc nhìn thứ nhất.",
  location: "Thành phố Hồ Chí Minh, Việt Nam",
};

export const journey = [
  {
    title: "Nhận dạng chữ trong ảnh",
    concept: "Nhận thức thị giác",
    question:
      "Làm thế nào để mô hình trích xuất thông tin có cấu trúc một cách tin cậy từ cảnh ảnh phức tạp?",
    note: "Nghiên cứu ban đầu về phát hiện và nhận dạng chữ trong ảnh tiếng Việt đã khơi gợi mối quan tâm của tôi đối với biểu diễn thị giác vững chắc.",
    diagram: ["Cảnh ảnh", "Vùng chữ", "Văn bản nhận dạng"],
  },
  {
    title: "Hỏi đáp hình ảnh phẫu thuật",
    concept: "Suy luận đa phương thức",
    question:
      "Quan hệ tường minh giữa các đối tượng có thể cải thiện khả năng hỏi đáp hình ảnh phẫu thuật không?",
    note: "Tôi phát triển GNN-SurgVQA từ xác định bài toán, xây dựng mô hình, đánh giá đến viết bản thảo.",
    diagram: ["Đối tượng", "Quan hệ", "Câu hỏi + trả lời"],
  },
  {
    title: "Hiểu ngôn ngữ ký hiệu",
    concept: "Hành động theo chuỗi",
    question:
      "Làm thế nào để mô hình hiểu cử chỉ diễn biến theo thời gian thay vì chỉ nhìn các khung hình tĩnh?",
    note: "Tại TMA Solutions, tôi nghiên cứu nhận dạng ngôn ngữ ký hiệu liên tục và tạo avatar 3D từ văn bản. Công việc này đưa tôi đến với các hành động theo chuỗi.",
    diagram: ["Khung hình cử chỉ", "Chuỗi", "Ý nghĩa"],
  },
  {
    title: "Video góc nhìn thứ nhất",
    concept: "Định vị theo thời gian",
    question:
      "Mô hình thị giác–ngôn ngữ nên biểu diễn các hành động diễn ra theo thời gian như thế nào?",
    note: "Tại VinRobotics, tôi phát triển và đánh giá các quy trình VLM nhiều giai đoạn để mô tả hành động có định vị thời gian trong video góc nhìn thứ nhất.",
    diagram: ["Khung hình video", "Ngữ cảnh thời gian", "Mô tả hành động"],
  },
  {
    title: "Trí tuệ đa phương thức hiện thân",
    concept: "Hướng nghiên cứu tương lai",
    question:
      "Làm thế nào để mô hình đa phương thức hiểu hành động và tương tác đủ sâu để hỗ trợ tác tử thông minh?",
    note: "Hướng quan tâm hiện tại của tôi mở rộng sang AI lấy hành động làm trung tâm và trí tuệ hiện thân, bao gồm nghiên cứu VLM và VLA.",
    diagram: ["Nhận thức", "Thời gian + tương tác", "Hành động"],
  },
].map((translation, index) => ({ ...en.journey[index], ...translation }));

export const interests = [
  {
    title: "Học đa phương thức",
    detail:
      "Kết nối thông tin thị giác với ngôn ngữ và suy luận giữa nhiều phương thức.",
  },
  {
    title: "Hiểu video và thời gian",
    detail:
      "Nghiên cứu hành động, thứ tự thời gian và định vị trong video góc nhìn thứ nhất.",
  },
  {
    title: "Trí tuệ lấy hành động làm trung tâm",
    detail:
      "Tìm hiểu các mô hình có thể hiểu tương tác và hỗ trợ tác tử hiện thân.",
  },
];

export const research = [
  {
    title: en.research[0].title,
    question: journey[1].question,
    field: "Suy luận đa phương thức lấy đối tượng làm trung tâm",
    contribution:
      "Tôi thực hiện nghiên cứu từ xác định bài toán, chuẩn bị dữ liệu, phát triển mô hình, đánh giá đến viết bản thảo.",
    evidence:
      "Trên SSG-VQA, bộ dữ liệu khoảng 960 nghìn cặp hỏi–đáp, mô hình đạt độ chính xác 85,9% và F1 có trọng số 85,8% trên tập kiểm thử visual oracle gồm 77.198 câu hỏi.",
    context:
      "Thiết lập visual oracle dùng các hộp giới hạn có sẵn trong SSG-VQA, thay vì dự đoán từ bộ phát hiện YOLOv8 đã tinh chỉnh.",
    status: "ICDAM 2026 · Best Paper · bài báo đã được chấp nhận, chưa công bố",
    linkLabel: "Xem mã nguồn công khai",
  },
  {
    title: "Hiểu hành động với định vị thời gian",
    question: journey[3].question,
    field: "Video góc nhìn thứ nhất tại VinRobotics",
    contribution:
      "Tôi phát triển và đánh giá các quy trình thị giác–ngôn ngữ nhiều giai đoạn; thiết kế thí nghiệm có kiểm soát về lấy mẫu khung hình, định vị thời gian, prompt và điều chỉnh mô hình.",
    evidence:
      "Tôi phân tích sự mơ hồ về hướng, chênh lệch dữ liệu và hiện tượng quá khớp; đồng thời khảo sát các phương pháp VLM/VLA gần đây qua tài liệu và thí nghiệm quy mô lớn với SGLang.",
    context: "Thực tập nghiên cứu, nhóm AI Platform VLA, tháng 7–8/2026.",
    status: "Thực tập nghiên cứu · VinRobotics",
    linkLabel: undefined,
  },
].map((translation, index) => ({ ...en.research[index], ...translation }));

export const optimization = {
  ...en.optimization,
  title: "Vận chuyển máu khẩn cấp",
  question:
    "Làm thế nào để cân bằng chi phí và thời gian chờ của bệnh viện trong điều kiện vận hành thực tế?",
  contribution:
    "Tôi mô hình hóa bài toán định tuyến xe điện đa mục tiêu với trạm đổi pin và khung thời gian, rồi phát triển các phương pháp lai NSGA-II và SPEA2 kết hợp Savings, 2-opt và 3-opt.",
  evidence:
    "Đánh giá trên bộ chuẩn EVRP-TW và nghiên cứu tình huống tại Thành phố Hồ Chí Minh gồm 36 bệnh viện và 6 trạm đổi pin.",
  recognition: "Giải B Nghiên cứu khoa học sinh viên UEH · Bán kết Eureka 2025",
};

export const publications = [
  {
    ...en.publications[0],
    status: "Best Paper · đã được chấp nhận, bài báo chưa công bố",
    linkLabel: "Mã nguồn công khai",
  },
  { ...en.publications[1], status: "Đã xuất bản", linkLabel: "Đọc bài báo" },
];

export const experience = [
  {
    ...en.experience[0],
    period: "Tháng 7–8/2026",
    role: "Thực tập sinh nghiên cứu AI",
    summary:
      "Mô tả hành động có định vị thời gian trong video góc nhìn thứ nhất, với các thí nghiệm có kiểm soát về lấy mẫu, định vị, prompt và điều chỉnh mô hình.",
  },
  {
    ...en.experience[1],
    period: "Tháng 3–5/2026",
    role: "Thực tập sinh kỹ sư nghiên cứu AI",
    summary:
      "Nghiên cứu giao tiếp hai chiều bằng ngôn ngữ ký hiệu và suy luận trên trình duyệt với PyTorch và ONNX Runtime Web.",
  },
  {
    ...en.experience[2],
    period: "Tháng 3/2025–1/2026",
    role: "Cộng tác viên nghiên cứu",
    organization: "Đại học Kinh tế Thành phố Hồ Chí Minh",
    summary:
      "Nghiên cứu hỏi đáp hình ảnh phẫu thuật, nhận dạng chữ trong ảnh tiếng Việt và tối ưu hóa đa mục tiêu qua toàn bộ quy trình nghiên cứu.",
  },
];

export const education = {
  ...en.education,
  degree: "Cử nhân Khoa học dữ liệu",
  institution: "Đại học Kinh tế Thành phố Hồ Chí Minh",
  period: "Tháng 9/2022–3/2026",
  rank: "Hạng 2 ngành Khoa học dữ liệu",
  schoolRank: "Top 5% Khoa Công nghệ Thông tin Kinh doanh",
  programs: [
    "Chương trình Tài năng AI ứng dụng Vingroup × VinUniversity, tháng 5–8/2026",
    "AI Vietnam AIO2026, tháng 6/2026–nay",
  ],
};

export const gradeMind = {
  ...en.gradeMind,
  subtitle: "Hỗ trợ chấm bài Toán bằng AI",
  summary:
    "Hệ thống chấm Toán trung học với giáo viên trong vòng kiểm soát, phản hồi dựa trên bằng chứng, phân tích lỗi theo lớp, phân luồng theo độ tin cậy và bảo vệ thông tin cá nhân.",
  program:
    "Dự án cuối khóa Chương trình Tài năng AI ứng dụng Vingroup × VinUniversity",
};
