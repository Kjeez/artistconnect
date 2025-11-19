'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Share2, Edit, Save, Star, Clock, Users, MessageCircle, Sparkles, RefreshCw, Copy, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function GeneratedScriptPage() {
  const [isSaved, setIsSaved] = useState(false);
  const [rating, setRating] = useState(0);
  const [activeTab, setActiveTab] = useState<'script' | 'notes' | 'revisions'>('script');

  const scriptMetadata = {
    title: 'The Last Rehearsal',
    genre: 'Drama',
    generatedAt: '2025-11-19 10:30 AM',
    duration: '15 minutes',
    characters: 3,
    scenes: 2,
    prompt: 'A short drama about actors preparing for their final performance, exploring themes of legacy, memory, and the passage of time.',
  };

  const scriptContent = `THE LAST REHEARSAL
A Short Play

CHARACTERS:
MAYA - Lead actress, 65, contemplative and wise
ARJUN - Supporting actor, 40, passionate and idealistic
RIYA - Stage manager, 30, practical and devoted

SETTING: An empty theatre stage, late evening. Dim work lights illuminate scattered props and a single wooden chair center stage.

---

SCENE 1

(The stage is quiet. MAYA enters slowly from stage left, carrying a worn script. She walks to the chair and sits, running her fingers along its armrest.)

MAYA: (to herself) Forty years. Forty years I've walked across these boards.

(ARJUN enters from backstage, carrying a box of props.)

ARJUN: Maya? I didn't expect anyone to be here. Thought you'd gone home.

MAYA: I couldn't leave. Not yet. (pauses) Do you know what this chair is, Arjun?

ARJUN: (setting down the box) The prop from our first scene?

MAYA: This chair has held every character I've ever played. Every triumph, every heartbreak. (smiles) It remembers more than I do.

ARJUN: (approaching) The theatre's closing doesn't mean—

MAYA: (interrupts gently) It means exactly what it means. Endings are endings, Arjun. No need to dress them up.

ARJUN: But you're not ending. You'll find other stages.

MAYA: Will I? Or will I find that the stages have moved on without me?

(RIYA enters with her clipboard, surprised to see them.)

RIYA: You're both still here. The building closes in an hour.

MAYA: An hour. (laughs softly) We need at least two for a proper goodbye.

RIYA: (sitting on the stage edge) Then we'll take two. Let them wait.

ARJUN: (to Maya) Tell us. Tell us about the first time you stood on this stage.

MAYA: (closing her eyes) I was younger than you, Riya. Terrified. I forgot my first line—completely blank. But the audience... they waited. They gave me the space to remember. And when I did, when those words finally came... (opens eyes) ...I understood that theatre isn't about perfection. It's about truth in the moment.

RIYA: And you've given us forty years of truth.

MAYA: We've given it to each other. That's what people forget—theatre isn't made alone.

(A long pause. ARJUN walks to the chair.)

ARJUN: Then let's make this last one count. One more rehearsal. Right now.

MAYA: Now? We open tomorrow.

ARJUN: Exactly. One last rehearsal, for ourselves. Not for the audience, not for the critics. For us.

RIYA: (standing) I'll turn on the stage lights.

MAYA: (standing slowly) From the top?

ARJUN: From the top.

(RIYA moves offstage. The lights shift. MAYA and ARJUN take their positions. The chair remains center stage, witness to one final performance.)

---

SCENE 2

(The same stage, one hour later. The rehearsal has concluded. All three sit on the stage edge, exhausted but content.)

RIYA: That was... (searching for words) ...that was perfect.

ARJUN: Better than perfect. It was real.

MAYA: (looking out at the empty seats) Do you hear that?

RIYA: I don't hear anything.

MAYA: Exactly. The silence after a good performance. It's like the whole world is holding its breath. (pauses) I'll miss that silence most of all.

ARJUN: What will you do? After tomorrow?

MAYA: (smiles) I thought I'd finally learn to cook. I'm terrible at it.

RIYA: (laughs) You're not serious.

MAYA: (laughing too) No, probably not. But I'll figure it out. We always do, don't we? Find the next act.

ARJUN: To the next act. (raises an imaginary glass)

RIYA: (raising her hand) To the next act.

MAYA: (raising hers) And to this one. For everything it was.

(They sit in comfortable silence, three people who've become family, saying goodbye to a home that will soon be memory.)

(Lights slowly fade to black.)

THE END`;

  const revisions = [
    { version: 1, timestamp: '10:30 AM', changes: 'Initial generation' },
    { version: 2, timestamp: '10:45 AM', changes: 'Enhanced dialogue in Scene 1' },
    { version: 3, timestamp: '11:00 AM', changes: 'Added emotional depth to Maya\'s character' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/script-store">
            <button className="flex items-center gap-2 text-text-muted hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Script Store
            </button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-neon-pink/20">
              <Sparkles className="w-8 h-8 text-neon-pink" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold font-vietnam mb-2">
                <span className="neon-text-pink">{scriptMetadata.title}</span>
              </h1>
              <p className="text-text-muted">
                AI-Generated Script • {scriptMetadata.genre} • {scriptMetadata.duration}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`btn-outline flex items-center gap-2 ${
                  isSaved ? 'text-neon-pink border-neon-pink' : ''
                }`}
              >
                <Save className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                {isSaved ? 'Saved' : 'Save'}
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-cyan" />
                Generation Details
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <Clock className="w-5 h-5 text-neon-pink mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Duration</div>
                  <div className="text-white font-medium text-sm">{scriptMetadata.duration}</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <Users className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Characters</div>
                  <div className="text-white font-medium text-sm">{scriptMetadata.characters}</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <FileText className="w-5 h-5 text-neon-lime mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Scenes</div>
                  <div className="text-white font-medium text-sm">{scriptMetadata.scenes}</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <MessageCircle className="w-5 h-5 text-neon-gold mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Genre</div>
                  <div className="text-white font-medium text-sm">{scriptMetadata.genre}</div>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-featured"
            >
              <div className="flex gap-2 mb-6 border-b border-neon-cyan/20">
                <button
                  onClick={() => setActiveTab('script')}
                  className={`px-4 py-3 font-medium transition-all ${
                    activeTab === 'script'
                      ? 'text-neon-cyan border-b-2 border-neon-cyan'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Script
                </button>
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`px-4 py-3 font-medium transition-all ${
                    activeTab === 'notes'
                      ? 'text-neon-pink border-b-2 border-neon-pink'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Notes
                </button>
                <button
                  onClick={() => setActiveTab('revisions')}
                  className={`px-4 py-3 font-medium transition-all ${
                    activeTab === 'revisions'
                      ? 'text-neon-lime border-b-2 border-neon-lime'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Revisions
                </button>
              </div>

              {/* Script Content */}
              {activeTab === 'script' && (
                <div className="space-y-4">
                  <div className="flex justify-end gap-2">
                    <button className="btn-outline text-sm flex items-center gap-2">
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                    <button className="btn-outline text-sm flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                  </div>
                  <div className="p-6 rounded-lg bg-input-bg border border-neon-cyan/20">
                    <pre className="text-text-light font-mono text-sm leading-relaxed whitespace-pre-wrap">
                      {scriptContent}
                    </pre>
                  </div>
                </div>
              )}

              {/* Notes */}
              {activeTab === 'notes' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
                    <h4 className="text-neon-cyan font-bold mb-2">Director\'s Notes</h4>
                    <p className="text-text-light text-sm">
                      This script explores themes of legacy and closure through intimate character interactions. Consider minimal staging to emphasize dialogue.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-neon-pink/10 border border-neon-pink/30">
                    <h4 className="text-neon-pink font-bold mb-2">Performance Suggestions</h4>
                    <ul className="text-text-light text-sm space-y-2">
                      <li>• Maya\'s character requires subtle emotional nuance</li>
                      <li>• The chair serves as a central metaphor - treat it with reverence</li>
                      <li>• Silence between dialogue is as important as the words</li>
                      <li>• Final scene should feel like a gentle goodbye, not dramatic</li>
                    </ul>
                  </div>
                  <textarea
                    placeholder="Add your own notes..."
                    className="input-field resize-none h-32"
                  />
                </div>
              )}

              {/* Revisions */}
              {activeTab === 'revisions' && (
                <div className="space-y-3">
                  {revisions.map((revision) => (
                    <div
                      key={revision.version}
                      className="p-4 rounded-lg bg-input-bg border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold">Version {revision.version}</span>
                        <span className="text-text-muted text-sm">{revision.timestamp}</span>
                      </div>
                      <p className="text-text-light text-sm">{revision.changes}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card-featured space-y-3"
            >
              <h3 className="text-white font-bold mb-4">Actions</h3>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Regenerate
              </button>
              <button className="btn-outline w-full flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Script
              </button>
              <button className="btn-outline w-full flex items-center justify-center gap-2">
                <Edit className="w-5 h-5" />
                Edit in Workshop
              </button>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4">Rate This Script</h3>
              <p className="text-text-muted text-sm mb-4">
                Help us improve AI generation quality
              </p>
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-all"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? 'fill-neon-gold text-neon-gold'
                          : 'text-text-muted'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <div className="text-center text-neon-cyan text-sm">
                  Thanks for your feedback!
                </div>
              )}
            </motion.div>

            {/* Original Prompt */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4">Original Prompt</h3>
              <p className="text-text-light text-sm leading-relaxed">
                {scriptMetadata.prompt}
              </p>
            </motion.div>

            {/* Export Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4">Export Formats</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-lg bg-input-bg hover:bg-neon-cyan/10 text-white transition-all">
                  PDF Document
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg bg-input-bg hover:bg-neon-pink/10 text-white transition-all">
                  Word Document
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg bg-input-bg hover:bg-neon-lime/10 text-white transition-all">
                  Plain Text
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg bg-input-bg hover:bg-neon-gold/10 text-white transition-all">
                  Final Draft Format
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
