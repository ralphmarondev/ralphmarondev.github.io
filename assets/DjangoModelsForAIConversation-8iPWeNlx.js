import{_ as p}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-CDCZL-bD.js";import{T as a,a as l,_ as c}from"./TopicNext.vue_vue_type_script_setup_true_lang-ByHyYtG_.js";import{T as r}from"./TopicTerm-Bt_DEisM.js";import{C as i}from"./CodeBlock-bZN1puOf.js";import{O as d}from"./OutputBlock-Cz3Nj6CK.js";import{_ as u}from"./TableBlock.vue_vue_type_script_setup_true_lang-Cxw-iObO.js";import{d as v,h,i as o,o as b,a as n,q as s,g as t}from"./index-DJwcHVGb.js";const w={class:"max-w-4xl mx-auto"},y=`Conversation
    |
    |-- Message 1: Hello!
    |
    |-- Message 2: Hi! How can I help?
    |
    |-- Message 3: Explain artificial intelligence.
    |
    |-- Message 4: AI is the simulation of human intelligence.`,C=`from django.db import models

class Conversation(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title`,M=`class Message(models.Model):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('assistant', 'Assistant'),
    ]

    conversation = models.ForeignKey(
        'Conversation',
        on_delete=models.CASCADE,
        related_name='messages'
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES
    )

    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.role}: {self.content[:30]}'`,T=`from django.db import models


class Conversation(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Message(models.Model):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('assistant', 'Assistant'),
    ]

    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name='messages'
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES
    )

    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f'{self.role}: {self.content[:30]}'`,x=`Conversation (1)
      |
      | has many
      |
      +---- Message (1)
      |
      +---- Message (2)
      |
      +---- Message (3)
      |
      +---- Message (4)`,D=`python manage.py makemigrations
python manage.py migrate`,j=`Migrations for 'chatbot':
  chatbot/migrations/0001_initial.py
    + Create model Conversation
    + Create model Message

Applying chatbot.0001_initial... OK`,A=`from chatbot.models import Conversation, Message

conversation = Conversation.objects.create(
    title='Introduction to AI'
)

Message.objects.create(
    conversation=conversation,
    role='user',
    content='What is artificial intelligence?'
)

Message.objects.create(
    conversation=conversation,
    role='assistant',
    content='Artificial intelligence is the simulation of human intelligence.'
)`,F=`conversation = Conversation.objects.get(id=1)

messages = conversation.messages.all()

for message in messages:
    print(message.role, message.content)`,I=`user What is artificial intelligence?

assistant Artificial intelligence is the simulation of human intelligence.`,O=`message = Message.objects.get(id=1)

conversation = message.conversation

print(conversation.title)`,E=`from django.contrib import admin
from .models import Conversation, Message

admin.site.register(Conversation)
admin.site.register(Message)`,S=`conversation = Conversation.objects.get(id=1)

conversation.delete()`,N=v({__name:"DjangoModelsForAIConversation",setup(R){const m=[{label:"CharField",values:["Stores short text with a defined maximum length, such as a conversation title."]},{label:"TextField",values:["Stores longer text, such as user prompts and AI-generated responses."]},{label:"DateTimeField",values:["Stores date and time information, such as when a message was created."]},{label:"ForeignKey",values:["Creates a many-to-one relationship between database records."]}],g=[{label:"Conversation",values:["Represents a complete chatbot session and stores information such as its title and timestamps."]},{label:"Message",values:["Represents an individual user or assistant message belonging to a conversation."]}];return(k,e)=>(b(),h(f,null,{default:o(()=>[n("div",w,[e[62]||(e[62]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:p,alt:"Django Models for AI Conversations",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[63]||(e[63]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Django Models for AI Conversations ")],-1)),s(a,null,{default:o(()=>[e[1]||(e[1]=t(" A chatbot can generate responses to user messages, but what happens when a user closes the application and returns later? Without a database, the application may lose the conversation history once the information is no longer available in memory. To solve this problem, we need a way to store conversations and their messages. Django provides ",-1)),s(r,null,{default:o(()=>[...e[0]||(e[0]=[t("Models",-1)])]),_:1}),e[2]||(e[2]=t(" , which allow developers to define the structure of database records using Python classes. These models serve as the foundation for storing and retrieving application data. ",-1))]),_:1}),s(l,null,{default:o(()=>[...e[3]||(e[3]=[t("Understanding Conversation Persistence",-1)])]),_:1}),s(a,null,{default:o(()=>[s(r,null,{default:o(()=>[...e[4]||(e[4]=[t("Persistence",-1)])]),_:1}),e[5]||(e[5]=t(" refers to the ability of an application to retain data even after the application is closed or restarted. For a chatbot, persistence allows users to revisit previous conversations instead of starting from an empty chat every time. ",-1))]),_:1}),s(a,null,{default:o(()=>[...e[6]||(e[6]=[t(" Consider a simple chatbot conversation: ",-1)])]),_:1}),s(i,{language:"text",code:y}),s(a,null,{default:o(()=>[...e[7]||(e[7]=[t(" The conversation contains multiple messages. Some messages come from the user, while others are generated by the AI assistant. Instead of storing the entire conversation as one large text value, we can store the conversation and each individual message as separate database records. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[8]||(e[8]=[t("Understanding Django Models",-1)])]),_:1}),s(a,null,{default:o(()=>[e[10]||(e[10]=t(" A ",-1)),s(r,null,{default:o(()=>[...e[9]||(e[9]=[t("Django Model",-1)])]),_:1}),e[11]||(e[11]=t(" is a Python class that defines the structure of a database table. Each model field represents a piece of information that the application wants to store. Django uses these definitions to create and manage the corresponding database tables. ",-1))]),_:1}),s(a,null,{default:o(()=>[...e[12]||(e[12]=[t(" For example, a conversation may contain a title and the date when it was created. Inside the chatbot application's ",-1),n("code",null,"models.py",-1),t(" file, we can define a ",-1),n("code",null,"Conversation",-1),t(" model. ",-1)])]),_:1}),s(i,{language:"python",code:C}),s(a,null,{default:o(()=>[...e[13]||(e[13]=[t(" The model contains two fields: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"title"),t(" stores the name or subject of the conversation.")]),n("li",null,[n("code",null,"created_at"),t(" records when the conversation was created.")])],-1),t(" The ",-1),n("code",null,"__str__()",-1),t(" method provides a readable representation of a conversation when viewing it in Django's administration interface or working with model instances. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[14]||(e[14]=[t("Creating the Message Model",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[15]||(e[15]=[t(" A conversation can contain many messages. Therefore, we need another model to represent individual messages. Each message should store its content, its sender, and the conversation to which it belongs. ",-1)])]),_:1}),s(i,{language:"python",code:M}),s(a,null,{default:o(()=>[...e[16]||(e[16]=[t(" The ",-1),n("code",null,"Message",-1),t(" model introduces several important concepts: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"ROLE_CHOICES"),t(" defines the allowed message roles: user and assistant.")]),n("li",null,[n("code",null,"conversation"),t(" connects the message to a conversation.")]),n("li",null,[n("code",null,"role"),t(" identifies who sent the message.")]),n("li",null,[n("code",null,"content"),t(" stores the actual message text.")]),n("li",null,[n("code",null,"created_at"),t(" records when the message was created.")])],-1)])]),_:1}),s(l,null,{default:o(()=>[...e[17]||(e[17]=[t("Understanding Database Relationships",-1)])]),_:1}),s(a,null,{default:o(()=>[e[19]||(e[19]=t(" Notice that the ",-1)),e[20]||(e[20]=n("code",null,"Message",-1)),e[21]||(e[21]=t(" model uses ",-1)),e[22]||(e[22]=n("code",null,"ForeignKey",-1)),e[23]||(e[23]=t(" to connect each message to a conversation. A ",-1)),s(r,null,{default:o(()=>[...e[18]||(e[18]=[t("Foreign Key",-1)])]),_:1}),e[24]||(e[24]=t(" is a field that establishes a relationship between records in different database tables. ",-1))]),_:1}),s(a,null,{default:o(()=>[e[26]||(e[26]=t(" In our chatbot, one conversation can contain many messages, but each message belongs to one conversation. This is called a ",-1)),s(r,null,{default:o(()=>[...e[25]||(e[25]=[t("One-to-Many Relationship",-1)])]),_:1}),e[27]||(e[27]=t(" . ",-1))]),_:1}),s(i,{language:"text",code:x}),s(a,null,{default:o(()=>[...e[28]||(e[28]=[t(" The relationship is defined using: ",-1)])]),_:1}),s(i,{language:"python",code:`conversation = models.ForeignKey(
    Conversation,
    on_delete=models.CASCADE,
    related_name='messages'
)`}),s(a,null,{default:o(()=>[...e[29]||(e[29]=[t(" Here is what the important arguments mean: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"Conversation"),t(" identifies the model being referenced.")]),n("li",null,[n("code",null,"on_delete=models.CASCADE"),t(" means that deleting a conversation also deletes its associated messages. ")]),n("li",null,[n("code",null,"related_name='messages'"),t(" allows us to access a conversation's messages using "),n("code",null,"conversation.messages"),t(". ")])],-1)])]),_:1}),s(l,null,{default:o(()=>[...e[30]||(e[30]=[t("Common Django Model Fields",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[31]||(e[31]=[t(" Django provides different field types depending on the kind of information that needs to be stored. ",-1)])]),_:1}),s(u,{headers:["Field Type","Description"],rows:m}),s(a,null,{default:o(()=>[...e[32]||(e[32]=[t(" Choosing the correct field type helps ensure that information is stored appropriately. For example, a conversation title does not usually need the same storage behavior as a long AI-generated response. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[33]||(e[33]=[t("Combining the Conversation and Message Models",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[34]||(e[34]=[t(" We can now combine both models into a complete implementation. Update the chatbot application's ",-1),n("code",null,"models.py",-1),t(" file with the following code. ",-1)])]),_:1}),s(i,{language:"python",code:T}),s(a,null,{default:o(()=>[...e[35]||(e[35]=[t(" We also introduced two additional features: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"updated_at"),t(" records the most recent time a conversation record was saved.")]),n("li",null,[n("code",null,"Meta.ordering"),t(" specifies the default ordering of messages by their creation time.")])],-1),t(" This makes it easier to retrieve messages in chronological order. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[36]||(e[36]=[t("Creating Database Migrations",-1)])]),_:1}),s(a,null,{default:o(()=>[e[38]||(e[38]=t(" Defining models in Python does not automatically create their database tables. Django uses ",-1)),s(r,null,{default:o(()=>[...e[37]||(e[37]=[t("Migrations",-1)])]),_:1}),e[39]||(e[39]=t(" to translate model changes into database schema changes. After saving the models, open your terminal in the directory containing ",-1)),e[40]||(e[40]=n("code",null,"manage.py",-1)),e[41]||(e[41]=t(" and execute the following commands. ",-1))]),_:1}),s(i,{language:"bash",code:D}),s(a,null,{default:o(()=>[...e[42]||(e[42]=[t(" The first command, ",-1),n("code",null,"makemigrations",-1),t(", generates migration files based on changes to the models. The second command, ",-1),n("code",null,"migrate",-1),t(", applies those migrations to the configured database. ",-1)])]),_:1}),s(d,{output:j}),s(a,null,{default:o(()=>[...e[43]||(e[43]=[t(" After successful migration, Django creates the database tables corresponding to the two models. The exact table names depend on your Django application and model names. For an application named ",-1),n("code",null,"chatbot",-1),t(", Django normally uses ",-1),n("code",null,"chatbot_conversation",-1),t(" and ",-1),n("code",null,"chatbot_message",-1),t(". ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[44]||(e[44]=[t("Creating a Conversation and Its Messages",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[45]||(e[45]=[t(" Django provides an Object-Relational Mapper (ORM) that allows developers to interact with database records using Python code instead of writing SQL statements for every operation. For example, we can create a conversation and two messages using the ORM. ",-1)])]),_:1}),s(i,{language:"python",code:A}),s(a,null,{default:o(()=>[...e[46]||(e[46]=[t(" The ",-1),n("code",null,"Conversation.objects.create()",-1),t(" method creates a new conversation record. The two ",-1),n("code",null,"Message.objects.create()",-1),t(" calls create individual messages and associate them with the conversation through the ",-1),n("code",null,"conversation",-1),t(" field. Notice that both messages reference the same conversation object. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[47]||(e[47]=[t("Retrieving Messages from a Conversation",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[48]||(e[48]=[t(" We can retrieve a conversation and access all its associated messages through the reverse relationship. ",-1)])]),_:1}),s(i,{language:"python",code:F}),s(a,null,{default:o(()=>[...e[49]||(e[49]=[t(" The ",-1),n("code",null,"conversation.messages.all()",-1),t(" expression retrieves all messages associated with the selected conversation. Because we configured the model's default ordering, the messages are returned in chronological order. ",-1)])]),_:1}),s(d,{output:I}),s(a,null,{default:o(()=>[...e[50]||(e[50]=[t(" We can also retrieve the conversation associated with an individual message. ",-1)])]),_:1}),s(i,{language:"python",code:O}),s(a,null,{default:o(()=>[...e[51]||(e[51]=[t(" This demonstrates how Django allows us to navigate relationships in both directions. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[52]||(e[52]=[t("Registering Models in Django Admin",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[53]||(e[53]=[t(" Django provides an administration interface where developers can manage database records. To make our conversation and message models visible in this interface, open ",-1),n("code",null,"admin.py",-1),t(" inside the chatbot application. ",-1)])]),_:1}),s(i,{language:"python",code:E}),s(a,null,{default:o(()=>[...e[54]||(e[54]=[t(" After registering the models, start the development server and visit the Django administration page at ",-1),n("code",null,"/admin/",-1),t(". Once you log in with an administrator account, you can view, create, update, and delete conversation and message records through the interface. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[55]||(e[55]=[t("Understanding Deletion Behavior",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[56]||(e[56]=[t(" Our message model uses ",-1),n("code",null,"on_delete=models.CASCADE",-1),t(". This means deleting a conversation also deletes all messages associated with it. For example: ",-1)])]),_:1}),s(i,{language:"python",code:S}),s(a,null,{default:o(()=>[...e[57]||(e[57]=[t(" If the selected conversation contains several messages, those associated records are deleted as well. This behavior helps prevent messages from remaining in the database without their parent conversation. In a real application, deletion should also follow appropriate authorization and data-retention rules. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[58]||(e[58]=[t("Understanding the Purpose of Each Model",-1)])]),_:1}),s(u,{headers:["Model","Purpose"],rows:g}),s(a,null,{default:o(()=>[...e[59]||(e[59]=[t(" Separating conversations and messages allows the application to manage chat sessions independently from their individual messages. It also makes it easier to retrieve a conversation's history, add new messages, and extend the system with additional information later. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[60]||(e[60]=[t("Summary",-1)])]),_:1}),s(a,null,{default:o(()=>[...e[61]||(e[61]=[t(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Persistence allows an application to retain data between sessions."),n("li",null,"Django models define the structure of database tables."),n("li",null,"A conversation can contain multiple messages."),n("li",null,"ForeignKey establishes a relationship between database records."),n("li",null,[n("code",null,"on_delete=models.CASCADE"),t(" deletes related messages when their conversation is deleted.")]),n("li",null,[n("code",null,"related_name"),t(" provides a convenient way to access related records.")]),n("li",null,"Migrations apply model changes to the database."),n("li",null,"Django ORM allows database operations through Python code."),n("li",null,"Django Admin provides an interface for managing model records.")],-1)])]),_:1}),s(c,{to:"/academia/student/classes/elective3-storing-chat-history"})])]),_:1}))}});export{N as default};
