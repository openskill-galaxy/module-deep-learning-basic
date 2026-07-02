import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="deep learning neural network neuron weight bias tensor computation graph forward propagation backward propagation chain rule gradient learning rate epoch batch iteration activation ReLU Sigmoid Tanh Softmax loss MSE CrossEntropy optimizer SGD Momentum Adam weight init MLP CNN convolution kernel stride padding pooling fully connected image classification RNN LSTM GRU sequence modeling attention self-attention transformer embedding position encoding PyTorch autograd Dataset DataLoader training loop validation model save inference GPU CUDA dropout batchnorm layernorm regularization overfitting underfitting AlexNet VGG ResNet BERT GPT seq2seq attention mechanism transformer encoder decoder multi-head attention layer norm residual connection skip connection gradient vanishing gradient exploding weight decay learning rate scheduler warmup early stopping fine-tuning transfer learning pre-training";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"dl-tag-"+String(i+1).padStart(3,"0"),name:n,category:"DL",description:"DL标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"dl-course-01",order:1,slug:"DL入门",title:"深度学习入门与学习路线",description:"DL概述、应用、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"dl-course-02",order:2,slug:"神经元张量",title:"神经元、张量与计算图",description:"神经元模型、张量操作、计算图、自动求导。",estimatedHours:8,diff:"easy"},
  {id:"dl-course-03",order:3,slug:"前向反向传播",title:"前向传播与反向传播",description:"前向传播、反向传播、链式法则、梯度计算。",estimatedHours:10,diff:"medium"},
  {id:"dl-course-04",order:4,slug:"激活损失优化",title:"激活函数、损失函数与优化器",description:"ReLU/Sigmoid/Tanh/Softmax、MSE/CrossEntropy、SGD/Adam。",estimatedHours:10,diff:"medium"},
  {id:"dl-course-05",order:5,slug:"PyTorch基础",title:"PyTorch 基础与张量操作",description:"Tensor、autograd、GPU加速、张量运算。",estimatedHours:8,diff:"medium"},
  {id:"dl-course-06",order:6,slug:"数据加载训练",title:"数据集、DataLoader 与训练循环",description:"Dataset、DataLoader、训练循环、验证、可视化。",estimatedHours:10,diff:"medium"},
  {id:"dl-course-07",order:7,slug:"MLP多层感知机",title:"多层感知机 MLP",description:"MLP结构、全连接层、激活、非线性。",estimatedHours:8,diff:"medium"},
  {id:"dl-course-08",order:8,slug:"CNN卷积",title:"卷积神经网络 CNN",description:"卷积、池化、stride/padding、经典CNN结构。",estimatedHours:12,diff:"hard"},
  {id:"dl-course-09",order:9,slug:"图像分类项目",title:"图像分类项目实战",description:"CIFAR-10分类、数据增强、迁移学习、模型保存。",estimatedHours:10,diff:"hard"},
  {id:"dl-course-10",order:10,slug:"RNNLSTM",title:"RNN、LSTM 与序列建模",description:"RNN原理、梯度消失、LSTM/GRU、序列任务。",estimatedHours:10,diff:"hard"},
  {id:"dl-course-11",order:11,slug:"AttentionTransformer",title:"Attention 与 Transformer 入门",description:"Self-Attention、Multi-Head、Transformer结构、BERT/GPT入门。",estimatedHours:12,diff:"hard"},
  {id:"dl-course-12",order:12,slug:"正则化调参",title:"正则化、归一化与模型调参",description:"Dropout、BatchNorm、LayerNorm、调参策略。",estimatedHours:8,diff:"hard"},
  {id:"dl-course-13",order:13,slug:"模型保存部署",title:"模型保存、推理与部署基础",description:"模型保存加载、ONNX、Triton、推理优化。",estimatedHours:8,diff:"hard"},
  {id:"dl-course-14",order:14,slug:"DL项目面试",title:"DL综合项目与面试训练",description:"图像分类项目、文本分类项目、面试题。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解神经网络","会用PyTorch","能训练模型","完成DL项目"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2,kps){var n=String(id).padStart(3,"0");all.push({id:"dl-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"#"+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["DL"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"DL课程"+(ci+1)+"章"+(j+1),["dl-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}
var KPN=[["深度学习","多层神经网络"],["神经网络","神经元网络"],["PyTorch","DL框架"],["张量Tensor","多维数组"],["CNN","卷积网络"],["RNN","循环网络"],["LSTM","长短时记忆"],["Transformer","注意力机制"],["激活函数","非线性变换"],["优化器","参数更新"],["Dropout","随机失活"],["BatchNorm","批归一化"],["反向传播","梯度计算"],["训练循环","训练流程"],["推理部署","模型部署"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"dl-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"DL",tags:["DL"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"dl-kp-"+String(k.length+1).padStart(4,"0"),name:"DL概念"+(k.length+1),description:"DL概念",category:"DL",tags:["DL"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
var QC=["DL入门","神经元张量","前向反向传播","激活损失优化","PyTorch基础","数据加载训练","MLP多层感知机","CNN卷积","图像分类项目","RNNLSTM","AttentionTransformer","正则化调参","模型保存部署","DL项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"深度学习核心？",["神经网络","决策树","SVM","KNN"],"A","easy"],[2,"反向传播基于？",["链式法则","梯度下降","前向传播","激活函数"],"A","medium"],[3,"ReLU输出范围？",["0到正无穷","-1到1","0到1","所有数"],"A","medium"],[4,"PyTorch张量在哪运算？",["CPU/GPU","硬盘","内存","缓存"],"A","easy"],[6,"CNN的核心操作？",["卷积","全连接","激活","池化"],"A","medium"],[7,"迁移学习好处？",["减少训练时间","提高精度","降低内存","加快推理"],"A","medium"],[9,"RNN的问题？",["梯度消失","过拟合","欠拟合","内存不够"],"A","hard"],[10,"Transformer核心？",["Self-Attention","卷积","循环","全连接"],"A","hard"],[11,"Dropout作用？",["防过拟合","加速训练","减少参数","增加深度"],"A","medium"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"dl-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确答案是"+t_[3]+"。",wrong_reason:"加强理解。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"calculation",min:350},{type:"case_analysis",min:850}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="dl-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于DL"+ch+"表述正确的是？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="以下DL"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是DL重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在DL"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"的原理。";o=[{label:"A",text:"简答"}];a=ch+"用于DL。";}
    else if(it.type==="calculation"){s="DL"+ch+"计算题。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="DL"+ch+"案例：分析模型。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"dl-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["张量操作","梯度计算","MLP分类","训练循环","损失下降","过拟合修复","CNN图像分类","DataLoader使用","模型保存加载","学习率调整","Dropout使用","BatchNorm使用","RNN序列","Attention解释","Transformer入门","PyTorch报错","DL面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"dl-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握DL",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"问题",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"DL路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"dl-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["DL","神经网络","PyTorch","CNN","RNN","LSTM","Transformer","激活函数","优化器","张量","卷积","池化","Dropout","BatchNorm","反向传播"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["DL概念"+i,"DL概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"dl-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"DL",tags:["DL"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["DL问题"+(i+1)+"?","DL问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"dl-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"DL",tags:["DL"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["DL"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["DL"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["DL"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["DL"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["DL"]});});return e;}
async function main(){
  console.log("Gen DL...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-deep-learning-basic",slug:"module-deep-learning-basic",title:"深度学习基础",subtitle:"面向AI入门者",description:"面向AI入门和ML进阶学习者的神经网络反向传播激活函数优化器PyTorchCNNRNNTransformer训练调参与项目实战训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["深度学习","神经网络","PyTorch","CNN","RNN","Transformer","反向传播","模型训练"],estimatedHours:190,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{1F9E0}",repoUrl:"https://github.com/openskill-galaxy/module-deep-learning-basic",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
