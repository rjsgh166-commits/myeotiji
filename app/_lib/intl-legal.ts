import type { IntlLocale } from "./international";
export const LEGAL_UPDATED = "2026-11-13";
import { EXPANSION } from "./intl-expansion-content";
const BASE_LEGAL_LABELS = {
  "en": {
    "privacy": "Privacy & cookies",
    "terms": "Use & limitations",
    "contact": "Contact & corrections",
    "notice": "Estimates for general information. This service does not provide individual tax, legal, payroll or investment advice, prepare returns, or represent you. Check the stated year, location and exclusions before relying on a result.",
    "tracking": "English and Japanese pages offer optional Google Analytics by default, with an opt-out below; Chinese pages keep analytics off. AdSense is connected for non-personalized advertising; display depends on Google approval and account settings. Essential hosting and security logs may still be processed."
  },
  "ja": {
    "privacy": "プライバシー・Cookie",
    "terms": "利用案内・計算の限界",
    "contact": "お問い合わせ・訂正依頼",
    "notice": "一般的な情報を提供する概算ツールです。個別の税務・法律・労務・投資相談、申告書の作成代行や代理は行いません。結果を使う前に対象年・地域・除外条件を確認してください。",
    "tracking": "英語・日本語ページでは初期設定で（拒否した場合を除き）Google Analyticsを使います。中国語ページの解析・広告は停止中です。他の言語では非パーソナライズ広告用AdSenseを接続しています。表示は承認・アカウント設定に依存します。配信・安全確保に必要なログは処理される場合があります。"
  },
  "zh-hans": {
    "privacy": "隐私与Cookie",
    "terms": "使用说明与计算限制",
    "contact": "联系与纠错",
    "notice": "本服务提供一般信息和估算，不提供针对个人的税务、法律、薪资结算或投资咨询，不代办申报或代理事务。使用结果前，请核对适用年度、地区和未涵盖的条件。",
    "tracking": "中文页面不启用访问分析；英文和日文页面默认启用（用户可关闭）Google Analytics。除中文外的页面已连接非个性化AdSense广告，展示取决于Google审核与账号设置。托管和安全所需的连接日志仍可能被处理。"
  }
};
export const LEGAL_LABELS = { ...BASE_LEGAL_LABELS, es: EXPANSION.es.legalLabels, "pt-br": EXPANSION["pt-br"].legalLabels, id: EXPANSION.id.legalLabels, hi: EXPANSION.hi.legalLabels } satisfies Record<IntlLocale, Record<string, string>>;

export type LegalPage = "privacy" | "terms" | "contact";
const BASE_SECTIONS = {
  "en": {
    "privacy": [
      [
        "Scope and operator",
        "Myeotiji is operated from South Korea. This notice covers /en, /ja and /zh-hans pages. Contact: contact@myeotiji.kr. The Korean section has its own privacy notice and may use different analytics settings."
      ],
      [
        "Calculator inputs",
        "Calculations run in your browser. This version does not send calculator amounts, salary, dates or results to an operator database or analytics service. Do not place personal data in URLs or send identity documents, account details or payroll records to us."
      ],
      [
        "Analytics, ads and cookies",
        "English and Japanese pages load Google Analytics 4 by default unless you have rejected analytics in the page footer. Rejecting it does not affect calculations. We measure page visits and technical usage information; Google may process cookie identifiers, device/browser information and approximate location outside your country. Google signals and advertising personalization are disabled in this integration. Chinese pages do not load analytics. The same default-on analytics and opt-out approach also applies to Spanish, Brazilian Portuguese, Indonesian and Hindi pages. AdSense advertising tags are enabled except on Chinese pages. Google and its partners may use cookies, web beacons, IP addresses and identifiers to deliver and measure ads. Non-personalized ads are requested; this does not mean no cookies or data processing. Actual display depends on approval and account settings. The choice is saved in local storage and can be changed in the footer. On rejection we stop this integration and delete its cookies; other cookies can be removed in browser settings. Analytics cookies are configured to expire after 30 days and may refresh with use. Analytics record retention depends on the GA property settings; a verified account-specific duration is not yet available here."
      ],
      [
        "Necessary hosting and overseas processing",
        "Vercel delivers and protects this website. Requests necessarily expose connection information such as IP address, requested URL, time, device/browser headers and security signals to hosting infrastructure. Such information may be processed outside your country, including in the United States or other infrastructure locations. Disabling analytics does not remove this processing. We use it for delivery, security and fault investigation, not advertising profiles."
      ],
      [
        "Retention and your choices",
        "Calculator inputs are not retained by us as server records. Hosting logs follow provider retention and applicable project settings; we have not verified a single fixed retention period for all infrastructure logs. Contact us for the applicable details or to request access, correction, deletion or restriction where available under your law. We assess requests and legal exceptions, and do not promise that all provider logs can immediately be deleted. Closing the page clears its in-memory calculation state; your browser may preserve history or restore a tab."
      ],
      [
        "Email and external links",
        "If you choose to email us, we receive your address and message for handling the request and retain only what is needed for that purpose or legal obligations. Use fictional examples, not actual personal financial records. Email is not required to calculate. Official references open third-party websites with their own policies. Changes to tracking or data use require updating this notice and implementing any legally required choices before activation."
      ]
    ],
    "terms": [
      [
        "Purpose",
        "Free, self-service arithmetic and general explanations. We do not hold ourselves out as your lawyer, accountant, tax preparer, payroll provider, investment adviser or government agency. No professional-client relationship is created merely by using a calculator."
      ],
      [
        "Check the assumptions",
        "Results are estimates for the stated year, jurisdiction and model. Tax status, exemptions, plan documents, local rules, rounding and changing law can alter actual results. An example is not a guarantee. Verify with the relevant official service or qualified professional before filing, paying wages, investing, donating or booking travel."
      ],
      [
        "Specific limits",
        "US overtime uses the federal covered-nonexempt baseline, not all state rules. Take-home pay is a simplified annual illustration, not a W-4 or filing calculation. A 401(k) match is not a vested balance or a contribution recommendation. Stock average and compound tools do not recommend securities or guarantee returns. Date and age tools do not decide legal eligibility or deadlines."
      ],
      [
        "Errors and responsibility",
        "Report a suspected error using fictional inputs and the affected URL. We may correct, warn about or temporarily restrict an affected tool when its assumptions cannot be verified. This notice describes scope; it does not exclude liability that cannot lawfully be excluded, including applicable liability for intentional misconduct or gross negligence, or remove mandatory consumer rights."
      ],
      [
        "Support and changes",
        "Support handles technical faults and general source corrections. Do not request individual tax positions, legal decisions, filing preparation or representation. We will direct such requests to the relevant authority or a qualified professional. Material changes are reflected in the page date; recheck assumptions each time."
      ]
    ],
    "contact": [
      [
        "Technical issues, corrections and privacy requests",
        "Email contact@myeotiji.kr with the page URL, applicable year/region and a fictional example showing the expected and displayed result. You can also request information about data processing or exercise applicable privacy rights here. We do not require an account or a form."
      ],
      [
        "Keep your information safe",
        "Do not email government identifiers, bank accounts, passwords, full payslips or actual tax documents. We do not offer personal tax, legal or investment consultations or act on your behalf. For a filing, payment or employment deadline, contact the relevant authority or qualified professional directly."
      ]
    ]
  },
  "ja": {
    "privacy": [
      [
        "対象と運営",
        "Myeotijiは韓国から運営しています。この説明は/en、/ja、/zh-hansのページを対象とします。連絡先はcontact@myeotiji.krです。韓国語ページには別の方針があり、アクセス解析の設定も異なる場合があります。"
      ],
      [
        "計算の入力値",
        "計算はブラウザ内で行います。この版では金額、給与、日付、計算結果を運営者のデータベースや解析サービスに送信しません。URLに個人情報を入れたり、本人確認書類、口座情報、給与明細を送ったりしないでください。"
      ],
      [
        "解析・広告・Cookie",
        "英語・日本語ページでは初期設定で（ページ末尾で拒否した場合を除き）Google Analytics 4を読み込みます。拒否しても計算できます。ページ訪問や技術的な利用情報を測定し、GoogleがCookie識別子、端末・ブラウザ情報、おおよその地域を日本国外で処理する場合があります。この実装ではGoogleシグナルと広告のパーソナライズを無効にしています。中国語ページでは解析を読み込まず、中国語を除くページではAdSense広告タグが有効です。Google等がCookie・ウェブビーコン・IPアドレス等を広告配信や測定に使う場合があります。非パーソナライズ広告を要求しますが、Cookieや情報処理が不要になるわけではありません。表示は承認とアカウント設定に依存します。選択はローカルストレージに保存し、ページ末尾で変更できます。拒否するとこの解析を停止し、そのCookieを削除します。ほかのCookieはブラウザ設定で削除できます。解析Cookieの有効期間は30日に設定し、利用に伴い更新される場合があります。解析記録の保持はGAプロパティ設定に従い、アカウント固有の期間は未確認です。"
      ],
      [
        "配信に必要な情報と国外処理",
        "配信と安全確保にはVercelを利用します。IPアドレス、要求URL、接続時刻、端末・ブラウザのヘッダー、安全性に関する情報などが配信基盤で処理される場合があります。米国その他の基盤所在地など、日本国外での処理を伴う可能性があります。解析を停止してもこの処理はなくなりません。目的は配信、安全確保、障害調査であり広告の人物像作成ではありません。"
      ],
      [
        "保存期間とご相談",
        "計算入力値をサーバ記録として保存しません。配信ログは提供者の保持方針とプロジェクト設定に従います。すべての基盤ログに共通する固定の保存日数は確認できていません。具体的な処理内容、適用法に基づく開示・訂正・削除・利用停止などはメールでご相談ください。法令や記録の性質を確認して対応し、提供者の全ログを直ちに消せるとは限りません。ページを閉じると計算用メモリは失われますが、ブラウザが履歴やタブを復元する場合があります。"
      ],
      [
        "メールと外部サイト",
        "メールを送る場合、返信先と本文を問い合わせ対応に使用し、その目的や法的義務に必要な範囲で保管します。実在する個人の財務資料ではなく架空の例を使ってください。計算にメールは不要です。公式資料のリンク先には各サイトの方針が適用されます。追跡や利用目的を変える前に説明と必要な選択手続きを更新します。"
      ]
    ],
    "terms": [
      [
        "目的",
        "無料のセルフサービス計算と一般的な制度説明です。税理士・弁護士・社会保険労務士等として個別相談を受任したり、申告書・届出書の作成代行や代理を行ったりするサービスではありません。利用だけで専門家への委任関係が生じるものではありません。"
      ],
      [
        "前提条件の確認",
        "対象年・地域・入力条件に基づく概算です。控除、適用除外、加入条件、契約、端数処理、法改正で実際の数字は異なります。例示は保証ではありません。寄附、申告、労務上の対応などの前に公的機関や資格を有する専門家に確認してください。"
      ],
      [
        "日本向け計算の限界",
        "年収の壁は社会保険加入を確定せず、対象外表示は保険料ゼロを意味しません。ふるさと納税は控除上限の目安で、自己負担2,000円や還付額を保証しません。通勤定期は入力した運賃の単純比較であり鉄道会社の最新運賃を保証しません。株式平均取得単価・複利は銘柄推奨や利回り保証ではありません。年齢・日付計算は法的資格や申請期限の判定には使わないでください。"
      ],
      [
        "誤りと責任",
        "誤りの疑いは対象URLと架空の入力例でご連絡ください。前提を確認できない場合は訂正・注意表示・対象機能の一時制限を行う場合があります。この説明は適用範囲の案内であり、故意・重大な過失など法令上免除できない責任や、消費者の強行法規上の権利を排除するものではありません。"
      ],
      [
        "お問い合わせの範囲",
        "技術的な不具合と一般的な出典の訂正に対応します。個別の税務判断・法律判断、申告書作成、代理は受け付けません。必要に応じ公的機関や資格者への確認をご案内します。変更は更新日に反映し、利用の都度前提をご確認ください。"
      ]
    ],
    "contact": [
      [
        "不具合・訂正・プライバシーのご相談",
        "contact@myeotiji.krに対象ページURL、年度・地域、期待する結果と表示結果の違いを架空の例でお知らせください。情報の取扱いの説明や、適用法に基づく開示・訂正・削除等のご相談もこの窓口で受け付けます。登録や入力フォームはありません。"
      ],
      [
        "送らないでいただきたい情報",
        "マイナンバー、口座番号、パスワード、給与明細、申告書などは送らないでください。個別の税務・法律・投資相談や代理は行いません。手続きや支払いの期限がある場合は、公的機関や資格を有する専門家へ直接確認してください。"
      ]
    ]
  },
  "zh-hans": {
    "privacy": [
      [
        "范围与运营",
        "Myeotiji从韩国运营。本说明适用于/en、/ja和/zh-hans页面。联系邮箱：contact@myeotiji.kr。韩文页面适用另行公布的隐私说明，其访问分析设置可能不同。"
      ],
      [
        "计算输入",
        "计算在浏览器中完成。此版本不会将计算金额、工资、日期或结果发送至运营者数据库或分析服务。请勿把个人信息写入网址，也不要发送身份证件、账号或工资单。"
      ],
      [
        "分析、广告与Cookie",
        "中文页面不加载Google Analytics。英文和日文页面默认加载，用户可在页尾关闭Google Analytics 4，拒绝不影响计算。其可能由Google在境外处理Cookie标识符、设备与浏览器信息和大致地区等访问统计。该实现停用Google信号和广告个性化。中文页面不启用广告；其他语言页面已连接AdSense，Google及其合作方可能使用Cookie、网络信标、IP地址及标识符来提供和衡量广告。非个性化广告也可能使用Cookie。选择保存在本地存储中，可在英文或日文页尾修改。拒绝后停止该分析并清除该实现的Cookie；其他Cookie可在浏览器设置中删除。分析Cookie配置为30天有效，使用时可能续期；分析记录保留期限取决于GA属性设置，尚未核实该账号的具体期限。"
      ],
      [
        "必要托管与境外处理",
        "网站由Vercel提供托管和安全服务。连接所需的IP地址、请求网址、时间、设备与浏览器请求头、安全信号等可能由托管基础设施处理，地点可能包括美国及其他基础设施所在地，即可能在中国大陆境外。停止分析并不消除这类处理。用途为页面交付、安全与故障排查，不用于广告画像。"
      ],
      [
        "保存与权利请求",
        "我们不将计算输入保留为服务器记录。托管日志依提供方的保留政策和项目设置处理，尚未核实所有基础设施日志统一适用的固定保留天数。可通过邮箱询问具体处理情况，或按适用法律请求查阅、更正、删除、限制处理等。我们将核实请求及法定例外，不承诺可立即删除提供方的全部日志。关闭页面会清除运行中的计算状态，但浏览器可能保存历史或恢复标签页。"
      ],
      [
        "邮件与外部链接",
        "如果主动发送邮件，我们会接收邮箱地址和正文，用于处理请求，并仅在该目的或法律义务所需范围内保留。请用虚构示例，不要提供真实个人财务材料；计算不要求发邮件。官方资料链接打开第三方网站，适用其各自政策。启用新的追踪或变更处理目的前，会更新说明并落实依法需要的告知及选择程序。"
      ]
    ],
    "terms": [
      [
        "服务用途",
        "本服务为免费的自助计算与一般规则说明，不作为个人税务、法律、薪资结算或投资顾问，不代办申报、制作提交用税务文书或代理事务。使用计算器本身不形成专业委托关系，也不代表政府认可。"
      ],
      [
        "核对适用条件",
        "结果只是在注明的年度、地区和模型下的估算。居民身份、减免、单位规则、取整、法律变化及其他收入可能影响实际结果。示例不构成保证。申报、发薪、缴费、投资或预订行程前，请向相应官方机构或合格专业人士核实。"
      ],
      [
        "中国大陆工具的限制",
        "五险一金只采用页面注明的北京普通职工模型，不是全国通用标准或正式结算。个税采用固定月薪累计预扣假设，不代表年度汇算或退补税的最终金额。拼假方案不代表单位批准，普通放假调休安排不等于所有日期都是法定节假日。股票成本与复利不构成证券推荐或收益承诺。年龄、日期计算不认定法定资格或办事期限。"
      ],
      [
        "错误与责任",
        "如怀疑结果有误，请用虚构输入和页面网址反馈。无法核实前提时，我们可能更正、增加警示或暂时限制相关工具。本说明用于界定服务范围，不排除依法不得免除的责任，包括适用的故意或重大过失责任，也不剥夺法定消费者权利。"
      ],
      [
        "支持范围",
        "仅处理技术故障和一般来源更正，不受理个人税务立场、法律判断、申报代理或个性化投资咨询。此类问题请向主管机关或合格专业人士咨询。重要变更反映在更新日期，请在每次使用时重新核对前提。"
      ]
    ],
    "contact": [
      [
        "技术、纠错与隐私请求",
        "请发邮件至contact@myeotiji.kr，提供页面网址、年度与地区，并用虚构示例说明预期结果和实际结果。也可在此询问数据处理情况，提出适用法律下的查阅、更正、删除等请求。不需要注册或填写表单。"
      ],
      [
        "请勿发送敏感资料",
        "请勿发送身份证号、银行账号、密码、完整工资单或纳税材料。本服务不提供个人税务、法律或投资咨询，也不代理办事。如涉及申报、付款或劳动事项期限，请直接联系主管机关或合格专业人士。"
      ]
    ]
  }
};

export const LEGAL_SECTIONS = { ...BASE_SECTIONS, es: EXPANSION.es.legal, "pt-br": EXPANSION["pt-br"].legal, id: EXPANSION.id.legal, hi: EXPANSION.hi.legal };
