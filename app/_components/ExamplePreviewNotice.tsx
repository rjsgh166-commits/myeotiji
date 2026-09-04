"use client";

export default function ExamplePreviewNotice({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="mb-5 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm leading-6 text-blue-900" role="note">
      <strong>예시값으로 미리보기</strong>
      <span className="ml-2 text-blue-800">숫자나 조건을 바꾸면 바로 내 조건으로 계산됩니다.</span>
    </div>
  );
}
